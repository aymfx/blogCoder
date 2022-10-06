
<script lang="ts" setup>

</script>
<template>
  <div class="LyMain">
    <div class="container">
      <h1>
        Aymfx's博客
      </h1>
      <h2>web前端开发者、十二的御用铲屎官。</h2>
      <a href="/生活/猫十二/照片.html">
        <img class="logo" src="https://cdn.jsdelivr.net/gh/aymfx/pic/img/Home-2022-10-04-15-48-21.jpeg" alt="头像" srcset=""/>
      </a>
      <div class="btns">
        <a href="/主页/前言/" class="brand green">开始探索</a>
        <a href="https://github.com/aymfx" class="brand">Github</a>
      </div>
      <p>有些人毕生所追求的东西往往是另一些人与生就俱来的东西。而当人生将走到尽头时, 也许必生追求的人得到了所渴望的,而与生俱来的人却失去了他们仅有的。</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.LyMain{
  width: 100vw;
  height: 100vh;
  background: url(https://cdn.jsdelivr.net/gh/aymfx/pic/img/Home-2022-10-04-13-43-42.jpg) no-repeat center center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container{
  width: 600px;
  height: 600px;
  margin-bottom: 60px;
  flex-wrap: wrap;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  box-sizing: border-box;
  padding: 20px;
  h1{
      background: var(--vp-home-hero-name-background);
      -webkit-text-fill-color: var(--vp-home-hero-name-color);
      text-align: center;
      line-height: 64px;
      font-size: 56px;
      color: var(--vp-home-hero-name-color);
  }
  h2{
    margin-top: 20px;
    line-height: 36px;
    font-size: 24px;
    font-weight: 500;
    white-space: pre-wrap;
    color: rgb(153, 165, 255);text-align: center;
  }
  .logo{
    margin: 20px auto 10px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: contain;
  }
  .btns{
    display: flex;
   justify-content: center;
   margin-bottom: 16px;
    .brand{
      border-radius: 20px;
      padding: 0 20px;
      line-height: 38px;
      font-size: 14px;
      border-color: var(--vp-button-alt-border);
      color: var(--vp-button-alt-text);
      background-color: var(--vp-button-alt-bg);
    }
    .green{
        border-color: var(--vp-button-brand-border);
        color: var(--vp-button-brand-text);
        background-color: var(--vp-button-brand-bg);
        margin-right: 20px;
      }
  }
  p{
    color: antiquewhite;
  }
  a{
    cursor: pointer;
  }
}

</style>
