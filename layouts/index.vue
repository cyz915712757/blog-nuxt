<template>
  <div>
    <!-- 头部 -->
    <blog-header />
    <!-- 中间主体区域 -->
    <div class="blog-main">
      <nuxt />
    </div>
    <!-- 底部 -->
    <blog-footer />
    <!-- 回到顶部组件 bottom 是图标距离底部高度 -->
    <el-backtop :bottom="80"></el-backtop>
  </div>
</template>
<script>
import BlogHeader from '@/components/layout/Header'
import BlogFooter from '@/components/layout/Footer'
export default {
  components: {
    BlogHeader, // BlogHeader: BlogHeader
    BlogFooter
  }
}
</script>
<style>
.blog-main {
  padding-top: 90px;
  max-width: 1140px;
  margin: 0 auto;
}
</style>
