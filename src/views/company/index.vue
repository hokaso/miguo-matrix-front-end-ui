<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :md="8" :sm="24">
        <div class="intro">
          <h3>关于我们</h3>
          <div class="con2 contact2">
            <h4>公司简介</h4>
            <div class="op">我们是腾讯在肇庆市的城市合作伙伴，提供企业和政府品牌建设服务、企业和政府宣传片摄制、大型活动策划与组织。在公司发展壮大的3年里，我们始终为客户提供好的产品和技术支持、健全的售后服务，如果您对我公司的产品服务有兴趣，期待您在线留言或者来电咨询。</div>
          </div>
          <div class="con contact">
            <h4>公司宣言</h4>
            <p>让世界看到您的价值！</p>
          </div>
          <div class="con contact">
            <h4>大众平台</h4>
            <el-row class="img_com" type="flex" justify="center">
              <div>
                <img src="../../assets/qrcode/sina.jpg" alt="">
                <p>新浪微博</p>
              </div>
              <div style="padding-left: 10px">
                <img src="../../assets/qrcode/wechat.jpg" alt="">
                <p>公众号</p>
              </div>
              <div style="padding-left: 10px">
                <img src="../../assets/qrcode/mini.jpg" alt="">
                <p>小程序</p>
              </div>
              <div style="padding-left: 10px">
                <img src="../../assets/qrcode/toutiao.jpg" alt="">
                <p>今日头条</p>
              </div>
            </el-row>
            <el-row class="img_com" type="flex" justify="center">
              <div>
                <img src="../../assets/qrcode/bilibili.jpg" alt="">
                <p>哔哩哔哩</p>
              </div>
              <div style="padding-left: 10px">
                <img src="../../assets/qrcode/douyin.jpg" alt="">
                <p>抖音</p>
              </div>
            </el-row>
          </div>
          <h3>联系方式</h3>
          <div class="con contact">
            <h4>广东米果传媒有限公司</h4>
            <p>肇庆市端州区肇庆学院中巴软件园综合办公实验楼505室<br>
              电话：13827527862&#x3000;邮编：526000</p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style scoped lang="scss">
  .intro{
    margin-top: 50px;
  }
  .intro h3 {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    background: url(../../assets/t-line.png) center 7px no-repeat;
    margin-bottom: 30px;
  }
  .intro h4 {
    font-size: 18px;
    color: #323232;
    text-align: center;
    margin: 25px 0 20px;
  }
  .intro .con p {
    text-align: center;
    font-size: 14px;
    color: #656565;
    line-height: 25px;
    /*text-indent: 2em;*/
  }
  .intro .con2 .op {
    padding-left: 50px;
    padding-right: 50px;
    font-size: 14px;
    color: #656565;
    line-height: 25px;
    /*text-indent: 2em;*/
  }
  .img_com {
    /*width: 60%;*/
    /*margin: 0 20%;*/
    // overflow: hidden;
    margin-top: 30px;
    flex-wrap: wrap;
  }
  .img_com img{
    width:150px;
    text-align: center;
  }
</style>
