// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme';
import Layout from './Layout.vue';
import NotFound from './NotFound.vue';
import Home from './components/Home.vue';

export default {
  ...DefaultTheme,
  NotFound,
  Layout,
  enhanceApp({ app }) {
    // register global components
    app.component('LYHome', Home);
  },
};
