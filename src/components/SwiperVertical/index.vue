<template>
    <el-carousel :interval="5000" direction="vertical" arrow="always" trigger="click" height="450px">
      <el-carousel-item v-for="item in list" :key="item.id">
        <img :src="item.swiperPic" class="banner_img" alt=""/>
      </el-carousel-item>
    </el-carousel>
<!--  <el-carousel height="150px">-->
<!--    <el-carousel-item v-for="item in 4" :key="item">-->
<!--      <h3 class="small">{{ item }}</h3>-->
<!--    </el-carousel-item>-->
<!--  </el-carousel>-->
</template>

<script>
  import WebApi from "@/api/WebApi";
  export default {
    name: "Swiper",
    data() {
      return {
        newArr: [],
        total: '',
        swiperPic: '',
        list: []
      }
    },
    created() {
      this.getRefresh()
    },
    methods: {
      getRefresh(){
        WebApi.findAllSwiper().then(data => {
          this.list = data
          Object.keys(this.list).forEach(key => (this.list[key].swiperPic =  process.env.VUE_APP_API + '/file/' +this.list[key].swiperPic))
        })
      }
    }
  }
</script>
