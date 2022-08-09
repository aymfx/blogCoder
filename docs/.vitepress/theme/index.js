// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme';
import Layout from './Layout.vue';
import NotFound from './NotFound.vue';
import LyPage from './components/LyPage.vue';

export default {
  ...DefaultTheme,
  NotFound,
  enhanceApp({ app }) {
    // register global components
    app.component('LyPage', LyPage);
  },
};
