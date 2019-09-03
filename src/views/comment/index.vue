<template>
  <el-card v-loading='loading' >
<!-- 具名插槽内容是标题 -->
<!-- 把这个整体给 elcard的标题 -->
<bread-crumb slot="header" >
    <template slot="title" >评论</template>
</bread-crumb>
<!-- 以上是自定义了具名插槽的面包导航 -->
<!-- 表格需要数据绑定动态数据 -->
<el-table :data='list' >
    <!-- 行数会自动渲染 -->
        <!-- formmatter 是 el-table-column 的属性 可以用于处理输入和显示信息-->
      <el-table-column  width="700" label="标题" prop="title" ></el-table-column>
      <el-table-column :formatter="formatter" width="" label="评论状态" prop="comment_status" ></el-table-column>
      <el-table-column width="" label="总评论数" prop="total_comment_count" ></el-table-column>
      <el-table-column width="" label="粉丝评论数" prop="fans_comment_count" ></el-table-column>
      <el-table-column width="" label="操作" prop="address" >
          <!-- 这里 视频11.35 -->
          <template slot-scope='o'  >
        <el-button size="small" type='text' >  修改</el-button>
          <el-button @click='openOrClose(o.row)' size='small' type="text" :style='{color:o.row.comment_status?"#F56C6C": "#409EFF" }' >{{o.row.comment_status?'关闭': '打开'}}</el-button>

          </template>
      </el-table-column>

</el-table>
<el-row type='flex' justify="center" style="margin-top:10px" >
    <!-- 翻页器 -->
<el-pagination
    @current-change='changePage'
    :current-page='page.page'
    :page-size="page.pageSize"
    :total='page.total'
  background
  layout="prev, pager, next"
  >
</el-pagination>
</el-row>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      loading: 'false',
      list: [],
      page: {
        //   当前页码
        page: 1,
        // 当前每夜条数
        pageSize: 10,
        //   总数
        total: 0
      }

    }
  },
  methods: {
    changePage (newpage) {
      this.page.page = newpage
      this.getComments()
    },
    openOrClose (row) {
      // 设置弹框内容
      let mess = row.comment_status ? '关闭' : '打开'
      this.$confirm(`是否${mess}评论`, '提示', {

      }).then(
        this.$axios({
          method: 'put',
          url: '/comments/status',
          // 这里没看明白 为什么要转
          params: { article_id: row.id.toString() }, // 请求路径写在params里
          data: { allow_comment: !row.comment_status }// 请求体写在data里
        }).then(res => {
          this.getComments()// 成功之后重新调用数据
        })
      )
    },
    formatter (row) {
      return row.comment_status ? '正常' : '失败'
    },
    getComments () {
      this.loading = true
      this.$axios({
        url: '/articles',
        params: { response_type: 'comment', page: this.page.page, per_page: this.page.pageSize }
      })
        .then(res => {
          this.loading = false
          this.list = res.data.results
          this.page.total = res.data.total_count
        //   console.log(res.data)
        })
    }
  },
  created () { this.getComments() }

}
</script>

<style>

</style>
