import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "@/styles/common.scss";
const app = createApp(App);
// 引入全局组件插件
import { componentPlugin } from "@/components";

app.use(componentPlugin);
app.use(createPinia());
app.use(router);
// 全局指令注册
import { lazyPlugin } from "@/directives";
app.use(lazyPlugin);

app.mount("#app");
