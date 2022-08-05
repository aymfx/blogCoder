<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #home-hero-before>
      My custom sidebar top before
    </template>
    <template #home-hero-after>
      My custom sidebar top after
    </template>
    <template #home-features-before>
      My custom sidebar top before
    </template>
    <template #home-features-after>
      My custom sidebar top content
    </template>
  </Layout>
</template>