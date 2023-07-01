import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "@/styles/common.scss";
// 导入pinia的持久化插件
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
const app = createApp(App);
// 引入全局组件插件
import { componentPlugin } from "@/components";
const pinia = createPinia();
// 用pinia的持久化插件
pinia.use(piniaPluginPersistedstate);
app.use(componentPlugin);
app.use(pinia);
app.use(router);
// 全局指令注册
import { lazyPlugin } from "@/directives";
app.use(lazyPlugin);

app.mount("#app");
