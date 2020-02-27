<template>
  <el-carousel v-if="listTemp" :interval="5000" type="card" height="470px" style="padding: 40px 0 10px 0;">
    <el-carousel-item v-for="(row,i) in listTemp" :key="i">
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="7" :id="'T_'+(i*3+j)" v-for="(cell, j) in row" :key="cell.id" :offset="j > 0 ? 1 : 0">
          <router-link :to="'/video/'+cell.id">
            <el-card :body-style="{ padding: '0px' }">
              <img :src="cell.videoPic" class="image" alt="">
              <div class="video_title">
                <span>{{cell.videoTitle}}</span>
              </div>
            </el-card>
          </router-link>
        </el-col>
      </el-row>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
  import WebApi from "@/api/WebApi";
  export default {
    name: "GridSwitch",
    data() {
      return {
        total: '',
        index: '',
        videoPic: '',
        videoTitle: '',
        videoProfile: '',
        listTemp: null,
        list: [],
        listQuery: {
          page: 1,
          size: 8,
          keywords: "",
          direction: 'DESC'
        },
      }
    },
    computed: {
      // listTemp() {
      //   const _list = this.list, listTemp = [], sectionCount = 3;
      //   for (const i in _list) {
      //     const index = parseInt((i / sectionCount).toString());
      //     if (listTemp.length <= index) {
      //       listTemp.push([]);
      //     }
      //     listTemp[index].push(_list[i]);
      //   }
      //   return listTemp;
      // }
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
          const _list = this.list, listTemp = [], sectionCount = 2;
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

<style>
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
  .el-carousel__mask{
    opacity: .0;
  }
  .video_title{
    padding: 14px;
    font-size: 16px;
    line-height: 23px;
  }


</style>
