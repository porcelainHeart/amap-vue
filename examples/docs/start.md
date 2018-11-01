
# 快速上手

----

## 使用前准备

在使用之前，需要申请高德地图api key

点击前往申请 [高德地图开发者中心](https://lbs.amap.com/dev/index)


### 组件使用

在 main.js 中写入以下内容:

```js
import Vue from 'vue';
import VAMap from 'vamap';
import App from './App.vue';

Vue.use(VAMap, { key: '<你的高德API KEY>' });

new Vue({
  el: '#app',
  render: h => h(App)
});
```
以上代码便完成了 VAMap 的引入
