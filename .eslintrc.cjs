/* eslint-env node */
module.exports = {
  root: true,
  extends: ["plugin:vue/vue3-essential", "eslint:recommended"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  //添加不再强制要求组件重命名的配置
  rules: {
    "vue/multi-word-component-names": 0,
  },
};
