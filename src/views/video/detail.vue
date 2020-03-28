<template>
  <div>
    <div v-if="!isMobile">
      <div class="banner">
        <img src="../../assets/article_fill.jpg" alt="" />
      </div>
      <el-row :gutter="20">
        <el-col :span="10" style="margin-left: 360px" class="main_container">
          <h1 class="main_title">{{ temp.videoTitle }}</h1>
          <div class="article_info">
            <span>{{ temp.createAt }}</span>
            <span style="padding-left: 8px"
              >&emsp; 作者：{{ temp.videoAuthor }}</span
            >
          </div>
          <div class="video_detail">
            <iframe
              :src="videoProfileTemp"
              scrolling="no"
              border="0"
              frameborder="no"
              framespacing="0"
              width="800px"
              height="500px"
              allowfullscreen="true"
              sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"
            >
            </iframe>
          </div>
          <div class="video_info">视频简介：{{ temp.videoProfile }}</div>
        </el-col>
        <el-col :span="4" :offset="1">
          <div class="block-title">
            推荐视频
          </div>
          <el-row
            v-for="item in list"
            class="abbr_article_single"
            :key="item.id"
          >
            <router-link :to="'/video/' + item.id">
              <div class="abbr_article_word">
                <div class="abbr_article_title">
                  {{ item.videoTitle }}
                </div>
                <div class="abbr_article_info">
                  <span>{{ item.createAt }}</span>
                  <span style="padding-left: 8px"
                    >&emsp; 作者：{{ item.videoAuthor }}</span
                  >
                </div>
              </div>
              <img alt="" :src="item.videoPic" class="abbr_article_img" />
            </router-link>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <div v-else>
      <div>
        <img src="../../assets/article_fill.jpg" alt="" class="full" />
      </div>
      <div class="card">
        <el-card
          shadow="never"
          style="margin-bottom: 16px;padding: 0px;"
          :body-style="{ padding: '10px' }"
        >
          <h1 class="main_title">{{ temp.videoTitle }}</h1>
          <div class="article_info">
            <span>{{ temp.createAt }}</span>
            <span style="padding-left: 8px"
              >&emsp; 作者：{{ temp.videoAuthor }}</span
            >
          </div>
          <div style="text-align: center;margin: 38px 0 16px; ">
            <div style="position: relative; padding: 30% 45%;">
              <iframe
                :src="videoProfileTemp"
                scrolling="no"
                border="0"
                frameborder="no"
                framespacing="0"
                allowfullscreen="true"
                sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"
                style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;"
              >
              </iframe>
            </div>
          </div>
          <div class="video_info">视频简介：{{ temp.videoProfile }}</div>
        </el-card>
        <el-card
          shadow="never"
          style="margin-bottom: 16px;"
          class="t"
          :body-style="{ padding: '10px' }"
        >
          <div class="t_title">
            推荐视频
          </div>
          <el-row
            v-for="item in list"
            style="width: 100%;margin-top: 16px;"
            :key="item.id"
            :gutter="24"
          >
            <router-link :to="'/video/' + item.id">
              <el-col :span="17">
                <div>
                  <div class="video_title">
                    {{ item.videoTitle }}
                  </div>
                  <div class="abbr_article_info">
                    <span>{{ item.createAt }}</span>
                    <span style="padding-left: 8px"
                      >&emsp; 作者：{{ item.videoAuthor }}</span
                    >
                  </div>
                </div>
              </el-col>
              <el-col :span="7">
                <img alt="" :src="item.videoPic" class="t_img" />
              </el-col>
            </router-link>
          </el-row>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import WebApi from "@/api/WebApi";
import { mapState } from "vuex";
export default {
  name: "detail",

  data() {
    return {
      total: 0,
      videoProfileTemp: "",
      temp: {
        readings: "",
        videoAuthor: "",
        videoUrl: ``,
        videoTitle: "",
        videoProfile: "",
        status: "",
        createAt: "",
        isDel: ""
      },
      listTemp: [],
      list: null,
      listQuery: {
        page: 1,
        size: 5,
        keywords: "",
        direction: "DESC"
      }
    };
  },
  created() {
    const id = this.$route.params && this.$route.params.id;
    this.fetchData(id);
    this.getRefresh();
  },
  methods: {
    fetchData(id) {
      WebApi.findOneVideo(id)
        .then(data => {
          this.temp = data;
          console.log(this.temp);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getRefresh() {
      WebApi.findAllVideo(this.listQuery).then(data => {
        this.list = data.data;
        this.total = this.list.length;
        Object.keys(this.list).forEach(
          key =>
            (this.list[key].videoPic =
              process.env.VUE_APP_API + "/file/" + this.list[key].videoPic)
        );
        this.videoProfileTemp =
          "https://player.bilibili.com/player.html?aid=" +
          this.temp.videoUrl +
          "&page=1&high_quality=1&danmaku=0";
      });
    }
  },
  computed: {
    ...mapState("app", ["isMobile"])
  }
};
</script>

<style lang="scss">
@media screen and (max-width: 768px) {
  .video_info {
    font-size: 16px;
    color: #656565;
    margin-bottom: 0;
  }
  .card {
    padding: 16px;
  }
  .t {
    padding: 10px;
    .t_title {
      font-size: 18px;
      color: #222;
      border-bottom: 1px solid #e5e9ef;
      padding-bottom: 10px;
    }
    .t_img {
      width: 100%;
    }
  }
  .abbr_article_word {
    width: 100%;
  }
  .abbr_article_single {
    width: 100%;
  }
  .video_title {
    font-size: 12px;
    color: #222;
    line-height: 1.5;
  }
  .full {
    width: 100%;
  }
}
.main_container {
  margin-top: 40px;
}
.main_title {
  width: 100%;
  /*height: 30px;*/
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 22px;
  font-weight: bold;
  line-height: 30px;
  color: #323232;
  /*text-align: center;*/
}
.banner {
  display: block;
  margin: 60px auto 0;
  border-radius: 0.6rem;
  width: 1200px;
  height: 150px;
  overflow: hidden;
}
.article_info {
  float: left;
  /*margin-bottom: 20px;*/
  width: 100%;
  height: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  line-height: 14px;
  color: #a2a2a2;
  /*text-align: center;*/
}
.video_detail {
  display: block;
  /*margin: 15px 10px 0 10px;*/
  padding-top: 50px;
  margin-bottom: 30px;
}
.block-title {
  display: block;
  margin-top: 70px;
  font-size: 18px;
  color: #222;
  border-bottom: 1px solid #e5e9ef;
  padding-bottom: 10px;
}
.abbr_article_single {
  margin-top: 16px;
  width: 310px;
  display: block;
  font-size: 0;
}
.abbr_article_word {
  width: 250px;
  line-height: 16px;
  display: inline-block;
  font-size: 12px;
  color: #222;
  margin-right: 12px;
  vertical-align: middle;
}
.abbr_article_title {
  max-height: 32px;
  transition: 0.3s;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.abbr_article_info {
  font-size: 12px;
  color: #99a2aa;
  letter-spacing: 0;
  margin-top: 4px;
}
.abbr_article_img {
  display: inline-block;
  /*width: 68px;*/
  height: 50px;
  border-radius: 4px;
  overflow: hidden;
  vertical-align: middle;
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
}
.video_info {
  font-size: 16px;
  /*color: #99a2aa;*/
  letter-spacing: 0;
  margin-bottom: 80px;
  margin-left: 5px;
  line-height: 25px;
}
</style>
