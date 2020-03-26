<template>
  <el-row type="flex" justify="center">
    <el-col v-if="listTemp" :span="7" class="articleL">
      <el-row class="articleL1">
        <router-link :to="'/article/'+listTemp[0][0].id">
          <img alt="" :src=listTemp[0][0].pic class="article1_img">
          <div class="article1">
            <h5 class="article_title">
              {{listTemp[0][0].title}}
            </h5>
            <span class="article_contain_i" v-html="listTemp[0][0].article">
          </span>
          </div>
        </router-link>
      </el-row>
      <el-row class="articleL2">
        <router-link :to="'/article/'+listTemp[0][1].id">
          <div class="article2">
            <h5 class="article_title">
              {{listTemp[0][1].title}}
            </h5>
            <span class="article_contain_i" v-html="listTemp[0][1].article">
          </span>
          </div>
          <img alt="" :src=listTemp[0][1].pic class="article2_img">
        </router-link>
      </el-row>
      <el-row class="articleL3">
        <router-link :to="'/article/'+listTemp[0][2].id">
          <img alt="" :src=listTemp[0][2].pic class="article3_img">
          <div class="article3">
            <h5 class="article_title">
              {{listTemp[0][2].title}}
            </h5>
            <span class="article_contain_i" v-html="listTemp[0][2].article">
          </span>
          </div>
        </router-link>
      </el-row>
    </el-col>
    <el-col v-if="listTemp" :span="7" class="articleC">
      <el-row class="articleC1">
        <router-link :to="'/article/'+listTemp[1][0].id">
          <img alt="" :src=listTemp[1][0].pic class="article4_img">
          <div class="article4">
            <h5 class="article_title">
              {{listTemp[1][0].title}}
            </h5>
            <span class="article_contain_j" v-html="listTemp[1][0].article">
          </span>
          </div>
        </router-link>
      </el-row>
      <el-row class="articleC2">
        <router-link :to="'/article/'+listTemp[1][1].id">
          <div class="article5">
            <h5 class="article_title">
              {{listTemp[1][1].title}}
            </h5>
            <span class="article_contain_j" v-html="listTemp[1][1].article">
          </span>
          </div>
          <img alt="" :src=listTemp[1][1].pic class="article5_img">
        </router-link>
      </el-row>
    </el-col>
    <el-col v-if="listTemp" :span="7" class="articleR">
      <el-row class="articleR1">
        <router-link :to="'/article/'+listTemp[2][0].id">
          <img alt="" :src=listTemp[2][0].pic class="article6_img">
          <div class="article6">
            <h5 class="article_title">
              {{listTemp[2][0].title}}
            </h5>
            <span class="article_contain" v-html="listTemp[2][0].article">
          </span>
          </div>
        </router-link>
      </el-row>
      <el-row class="articleR2">
        <router-link :to="'/article/'+listTemp[1][2].id">
          <img alt="" :src=listTemp[1][2].pic class="article7_img">
          <div class="article7">
            <h5 class="article_title">
              {{listTemp[1][2].title}}
            </h5>
            <span class="article_contain" v-html="listTemp[1][2].article">
          </span>
          </div>
        </router-link>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
  import WebApi from "@/api/WebApi";
  export default {
    name: "IrregularContainer",
    data() {
      return {
        total: '',
        listTemp: null,
        list: [],
        listQuery: {
          page: 1,
          size: 7,
          keywords: "",
          direction: 'DESC'
        },
      }
    },
    created() {
      this.getRefresh()
    },
    methods: {
      getRefresh(){
        WebApi.findSomeArticle(this.listQuery).then(data => {
          this.list = data.data
          this.total = this.list.length
          Object.keys(this.list).forEach(key => (this.list[key].pic =  process.env.VUE_APP_API + '/file/' +this.list[key].pic))
          Object.keys(this.list).forEach(key => (this.list[key].article =  this.list[key].article + '……'))
          // console.log(this.list)
          const _list = this.list, listTemp = [];
          for (const i in _list) {
            const index = parseInt((i / 3).toString());
            if (listTemp.length <= index) {
              listTemp.push([]);
            }
            listTemp[index].push(_list[i]);
          }
          this.listTemp = listTemp
          // console.log(this.listTemp)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .articleL{
    float: left;
    margin-right: 20px;
    width: 570px;
  }
  .articleL1, .articleL3, .articleL2{
    /*height: 240px;*/
    box-shadow: 0 0 14px #e4e2e2;
    -webkit-box-shadow: 0 0 14px #e4e2e2;
  }
  .article1_img, .article3_img{
    display: block;
    float: left;
    margin-right: 20px;
    max-height: 240px;
  }
  .article1, .article3 {
    display: block;
    float: left;
    width: 230px;
    padding-right: 20px;
    overflow: hidden;
  }
  .article_title{
    margin-top: 20px;
    margin-bottom: 2px;
    width: 100%;
    /*height: 18px;*/
    line-height: 24px;
    font-size: 18px;
    color: #313131;
    overflow: hidden;
  }
  .article_contain{
    margin-top: 5px;
    display: block;
    float: left;
    width: 100%;
    font-size: 12px;
    line-height: 20px;
    color: #656565;
    overflow: hidden;
  }
  .article2_img{
    display: block;
    float: right;
    margin-left: 20px;
    max-height: 240px;
  }
  .article2 {
    display: block;
    float: left;
    width: 230px;
    padding-left: 20px;
    overflow: hidden;
  }
  .articleL1, .articleC1, .articleC2, .articleR1{
    margin-top: 20px;
    display: block;
    float: left;
    width: 100%;
    background: #fff;
    overflow: hidden;
  }
  .articleR2{
    margin-top: 30px;
    display: block;
    float: left;
    width: 100%;
    background: #fff;
    overflow: hidden;
  }
  .articleL2, .articleL3{
    margin-top: 44px;
    display: block;
    float: left;
    width: 100%;
    background: #fff;
    overflow: hidden;
  }
  .articleC{
    float: left;
    margin-right: 20px;
    width: 260px;
  }
  .articleC1{
    width: 100%;
    /*height: 370px;*/
    box-shadow: 0 0 14px #e4e2e2;
    -webkit-box-shadow: 0 0 14px #e4e2e2;
  }
  .articleC2{
    width: 100%;
    height: 370px;
    box-shadow: 0 0 14px #e4e2e2;
    -webkit-box-shadow: 0 0 14px #e4e2e2;
  }
  .articleR2{
    width: 100%;
    /*height: 360px;*/
    box-shadow: 0 0 14px #e4e2e2;
    -webkit-box-shadow: 0 0 14px #e4e2e2;
  }
  .article4_img{
    display: block;
    float: left;
    margin-right: 20px;
    max-width: 260px;
  }
  .article5_img{
    margin: 10px 0 0;
    width: 260px;
    /*position: absolute;*/
    left: 0;
    bottom: 0;
  }
  .article6_img{
    display: block;
    float: left;
    width: 320px;
  }
  .article7_img{
    display: block;
    float: left;
    width: 320px;
    margin-top: -30px;
  }
  .article4, .article5{
    display: block;
    float: left;
    /*width: 220px;*/
    padding: 0 20px;
    overflow: hidden;
  }
  .article6, .article7{
    display: block;
    float: left;
    /*width: 300px;*/
    padding: 0 20px;
    overflow: hidden;
  }
  .articleR{
    float: left;
    margin-right: 20px;
    width: 320px;
  }

  .articleR1{
    width: 100%;
    /*height: 380px;*/
    box-shadow: 0 0 14px #e4e2e2;
    -webkit-box-shadow: 0 0 14px #e4e2e2;
  }
  .article_contain_i {
    display: block;
    float: left;
    width: 100%;
    font-size: 14px;
    line-height: 22px;
    color: #656565;
    overflow: hidden;
  }
  .article_contain_j {
    display: block;
    float: left;
    width: 100%;
    font-size: 14px;
    line-height: 20px;
    color: #656565;
    overflow: hidden;
  }





</style>
