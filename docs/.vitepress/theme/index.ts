// 引入antd文件
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import VueCalendarHeatmap from 'vue3-calendar-heatmap'
import 'vue3-calendar-heatmap/dist/style.css'
import DefaultTheme from "vitepress/theme";
import Template from './template/index.vue'
import MusicTemplate from './template/music.vue'
import HomeTemplate from './template/home.vue'

import MyLayout from './layout/index.vue'
import { Image } from 'ant-design-vue';
import "./style/index.css"; //引入自定义的样式

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // 将封装好的vue组件全局注册即可使用
    const routes = app;
    console.log(routes);
    app.use(Antd)
    app.use(VueCalendarHeatmap)
    app.component('Image', Image)
    app.component('Template', Template)
    app.component('HomeTemplate', HomeTemplate)
    app.component('MusicTemplate', MusicTemplate)
  },
  Layout: MyLayout
};