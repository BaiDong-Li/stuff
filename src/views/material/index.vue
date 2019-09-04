<template>
  <el-card class="material">
    <bread-crumb slot="header">
      <template slot="title">素材管理</template>
    </bread-crumb>
    <!-- part of upload -->
    <el-upload :show-file-list="false" :http-request="uploadImg" action="" class="upload-btn" >
      <el-button size='small'  type='primary' >upload pictures</el-button>
    </el-upload>
    <el-tabs v-model="activeName" @tab-click="changeTab">
      <el-tab-pane label="全部素材" name="all">
        <!-- 全部素材的内容 -->
        <div class="card-list">
          <el-card class="img-card" v-for="item in list" :key="item.id">
            <img :src="item.url" />
            <el-row align="middle" class="oper" type="flex" justify="space-around">
              <i @click='collectOrCancel(item)' :style="{color:item.is_collected ? 'red' : ''  }" class="el-icon-star-on"></i>
              <i  @click='delImg(item)' class="el-icon-delete-solid"></i>
            </el-row>
          </el-card>
        </div>
        <el-row type="flex" justify="center" >
          <el-pagination @current-change='changPage'  :current-page='page.page' :page-size="page.pageSize" :total="page.total" background layout="prev, pager, next" ></el-pagination>
        </el-row>
      </el-tab-pane>

      <el-tab-pane label="收藏图片" name="collect">
        <!-- 全部收藏的内容 -->
        <div class="card-list">
          <el-card class="img-card" v-for="item in list" :key="item.id">
            <img :src="item.url" />
          </el-card>
        </div>
         <el-row type="flex" justify="center" >
          <el-pagination @current-change='changPage'  :current-page='page.page' :page-size="page.pageSize" :total="page.total" background layout="prev, pager, next" ></el-pagination>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'all',
      list: [],
      page: {
        page: 1,
        pageSize: 10,
        total: 0
      }
    }
  },
  methods: {
    uploadImg (params) {
      let obj = new FormData()
      obj.append('image', params.file)
      this.$axios({
        url: '/user/images',
        method: 'post',
        data: obj
      })
        .then(() => {
          this.getMaterial()
        })
    },
    collectOrCancel (item) {
      let mess = item.is_collected ? '取消' : ''
      this.$confirm(`Do you sure to ${mess} this picture ?`, 'warning')
        .then(() => {
          this.$axios({
            url: `/user/images/${item.id}`,
            method: 'put',
            data: { collect: !item.is_collected }
          }).then(() => { this.getMaterial() })
        })
    },
    delImg (item) {
      this.$confirm('Do you sure to delete this picture?', 'warning')
        .then(() => {
          this.$axios({
            url: `/user/images/${item.id}`,
            method: 'delete'
          })
            .then(() => { this.getMaterial() })
        })
    },

    changPage (newPage) {
      this.page.page = newPage
      this.getMaterial()
    },
    changeTab () {
      this.page.page = 1
      this.getMaterial()
    },
    getMaterial () {
      this.$axios({
        url: '/user/images',
        params: {
          page: this.page.page,
          per_page: this.page.pageSize,
          //   total_count: this.page.total,
          collect: this.activeName === 'collect'
        }
      }).then(res => {
        this.list = res.data.results
        this.page.total = res.data.total_count
      })
    }
  },
  created () {
    this.getMaterial()
  }
}

</script>

<style lang='less' scoped >
.material {
  .upload-btn{
    position: absolute;
    right:10px;
    margin-top: -10px;
  }
  .card-list {
    display: flex;
    flex-wrap: wrap;
    .img-card {
      width: 180px;
      height: 180px;
      margin: 20px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      .oper {
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
        height: 30px;
        background-color: #f4f5f6;
        font-size: 18px;
      }
    }
  }
}
</style>
