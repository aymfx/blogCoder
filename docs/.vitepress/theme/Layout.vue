<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #home-hero-before>
      <div class="home-hero-before">
          <h2>
            有些人毕生所追求的东西往往是另一些人与生就俱来的东西。而当人生将走到尽头时, 也许必生追求的人得到了所渴望的,而与生俱来的人却失去了他们仅有的
          </h2>
      </div>
    </template>
    
    <template #home-features-after>
      <div class="home-features-after">
        <img src="https://cdn.jsdelivr.net/gh/aymfx/pic/img/照片-2022-10-02-18-12-39-20221002181237.png" >
      </div>
    </template>
  </Layout>
</template>
<style  lang="scss">
.VPHome{
  padding:0 !important;
}
.home-hero-before{
  height:400px;
  overflow:hidden;
  padding:20px 80px 0;
  h2{
    font-size:34px;
    line-height:48px;
  }
}
.home-hero-after{
  border:1px solid #9f9;
}
.home-features-before{
  border:1px solid #ff0;
}
.home-features-after{
  margin-top:20px;
  img{
    width:100%;
    overflow:hidden;
  }
}
</style>