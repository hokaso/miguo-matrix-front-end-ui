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
      <el-button class="filter-item-button" type="primary" icon="el-icon-search"  @click="getRefresh">
        搜索
      </el-button>
    </div>
    <el-row :gutter="20" v-for="(row,i) in listTemp" :key="i" type="flex" class="row-bg" justify="center" style="padding-bottom:50px;">
      <el-col :span="3" :id="'T_'+(i*3+j)" v-for="(cell, j) in row" :key="cell.id" :offset="j > 0 ? 1 : 0">
        <router-link :to="'/video/'+cell.id">
          <el-card :body-style="{ padding: '0px' }">
            <img :src="cell.videoPic" class="image" alt="">
            <div class="video_title">
              <span>{{cell.videoTitle}}</span>
              <div class="bottom clearfix">
<!--                <span class="info">{{ cell.videoProfile }}</span>-->
              </div>
            </div>
          </el-card>
        </router-link>
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
    name: "Video",
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
      getRefresh(){
        WebApi.findAllVideo(this.listQuery).then(data => {
          this.list = data.data
          this.total = this.list.length
          Object.keys(this.list).forEach(key => (this.list[key].videoPic =  process.env.VUE_APP_API + '/file/' +this.list[key].videoPic))
          // console.log(this.list)
          const _list = this.list, listTemp = [], sectionCount = 4;
          for (const i in _list) {
            const index = parseInt((i / sectionCount).toString());
            if (listTemp.length <= index) {
              listTemp.push([]);
            }
            listTemp[index].push(_list[i]);
          }
          this.listTemp = listTemp
        })
      }
    }
  }
</script>

<style scoped>
  .image{
    width: 100%;
    display: block;
  }
  .info {
    font-size: 13px;
    color: #999;
  }
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }
  .video_title{
    padding: 14px;
    font-size: 16px;
    line-height: 23px;
  }
</style>
