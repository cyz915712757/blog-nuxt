<template>
  <!-- 底部 -->
  <div class="mxg-footer">
    <div class="warp">
      <el-divider>一起学习,实现梦想</el-divider>
      <div class="footer-link">
        <a
          rel="nofollow"
          target="_blank"
          href="/about/"
        >
          关于我们
        </a>
        <span>/</span>
        <a
          rel="nofollow"
          target="_blank"
          href="/job/"
        >
          人才招聘
        </a><span>/</span>
        <a
          rel="nofollow"
          target="_blank"
          href="/contact/"
        >
          联系我们
        </a><span>/</span>
        <a
          rel="nofollow"
          target="_blank"
          href="/question/"
        >
          常见问题
        </a>
      </div>
      <div class="footer-information-box">
        <p>Copyright &copy;2020 mengxuegu.com &nbsp;All Rights Reserved&nbsp;
          <a
            href="http://www.beian.miit.gov.cn/"
            target="_blank"
            rel="nofollow"
          >
            赣ICP备16666888号-99
          </a>
        </p>
      </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>
<style scoped>
/* 底部 */
.mxg-footer {
  padding-top: 60px !important;
  padding-bottom: 50px !important;
  background: #fff;
}
.mxg-footer .warp {
  max-width: 1190px;
  margin: 0 auto;
}
.mxg-footer .warp .top-line {
  width: 1000px;
  height: 1px;
  background: #e3ebf0;
  margin: 0 auto;
}
.mxg-footer .warp .footer-link {
  height: 18px;
  line-height: 18px;
  text-align: center;
  margin-top: 40px;
  font-family: PingFangSC-Regular;
  font-size: 16px;
}

.mxg-footer .warp .footer-link a {
  display: inline-block;
  color: #2c2c40;
}

.mxg-footer .warp .footer-link span {
  display: inline-block;
  color: #2c2c40;
  padding: 0 10px;
}

.mxg-footer .warp .footer-information-box {
  font-family: PingFangSC-Regular;
  text-align: center;
  margin: 30px 0;
  font-size: 12px;
  line-height: 12px;
  color: #2c2c40;
}
.mxg-footer .warp .footer-information-box a {
  color: #2c2c40;
}
</style>
