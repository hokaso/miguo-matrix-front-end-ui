<template>
  <div>
    <swiper-vertical />
    <div class="filter-container">
      <el-input
        class="filter-item"
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model="listQuery.keywords">
      </el-input>
      <el-button class="filter-item-button" type="primary" icon="el-icon-search" @click="getRefresh">
        搜索
      </el-button>
    </div>
    <el-row type="flex" justify="center">
      <el-col v-if="list" :span="12" class="article_container">
        <el-row v-for="item in list" class="article_single" :key="item.id">
          <router-link :to="'/article/'+item.id">
            <div class="article_word">
              <div class="article_title">
                {{item.title}}
              </div>
              <div class="article_info">
                <span>{{item.createAt}}</span>
                <span style="padding-left: 8px">&emsp; 作者：{{item.author}}</span>
              </div>
              <div class="article_profile" v-html="item.article">
              </div>
            </div>
            <img alt="" :src=item.pic class="article_img">
          </router-link>
        </el-row>
      </el-col>
    </el-row>
    <pagination v-show="total || total>0" :total="total" :page.sync="listQuery.page" :size.sync="listQuery.size" @pagination="getRefresh" />
  </div>
</template>

<script>
  import SwiperVertical from "@/components/SwiperVertical";
  import WebApi from "@/api/WebApi";
  import Pagination from '@/components/Pagination' // secondary package based on el-pagination
  export default {
    name: "Article",
    components: { SwiperVertical, Pagination },
    data() {
      return {
        total: 0,
        index: '',
        createAt: '',
        listTemp: [],
        list: null,
        listQuery: {
          page: 1,
          size: 8,
          keywords: "",
          direction: 'DESC'
        },
      }
    },
    created() {
      this.getRefresh()
    },
    methods: {
      getRefresh() {
        WebApi.findSomeArticle(this.listQuery).then(data => {
          this.list = data.data
          this.total = this.list.length
          Object.keys(this.list).forEach(key => (this.list[key].pic =  process.env.VUE_APP_API + '/file/' +this.list[key].pic))
          Object.keys(this.list).forEach(key => (this.list[key].article =  this.list[key].article + '……'))
        })
      }
    }
  }
</script>

<style scoped>
  .article_single{
    background: rgba(241, 255, 248, 0.6);
    /*float: left;*/
    display: block;
    margin-bottom: 30px;
    border-radius: .6rem;
    /*z-index: 3;*/
    box-shadow: 0 0.06rem 0.12rem rgba(0,0,0,.1), 0 0.2rem 0.6rem rgba(0,0,0,.1);
    /*transition-duration: 0.3s;*/
    overflow: hidden;
  }
  .article_title {
    padding-top: 25px;
    padding-left: 30px;
    width: 658px;
    overflow: hidden;
    font-size: 16px;
    color: #323232;
  }
  .article_word {
    float: left;
    width: 658px;
    /*height: 120px;*/
    overflow: hidden;
    margin-right: 30px;
  }
  .article_info {
    clear: both;
    display: block;
    margin-top: 15px;
    margin-left: 30px;
    line-height: 12px;
    font-size: 12px;
    color: #a2a2a2;
  }
  .article_profile {
    float: left;
    /*margin-top: 5px;*/
    padding-left: 30px;
    width: 658px;
    overflow: hidden;
    font-size: 14px;
    color: #656565;
    line-height: 24px;
  }
  .article_img {
    float: left;
    width: 212px;
    overflow: hidden;
  }
  .article_container{
    width:900px
  }
</style>
