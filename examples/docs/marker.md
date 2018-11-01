# marker 地图点标记

---

### 基础用法

用于在地图上展示标记点。

<div class="demo-block">
  <v-marker class="marker" :point="[121.461658, 31.20117]"></v-marker>
  <v-marker class="marker" :point="{ lng: 121.461658, lat: 31.20117 }"></v-marker>
</div>

<style lang="less" scoped>
.demo-block{
  display: flex;
  .marker{
    width: 350px;
    height: 200px;
    margin-right: 10px;
  }
}
</style>

::: demo

```html
<div class="demo-block">
  <v-marker class="marker" :point="[121.461658, 31.20117]"></v-marker>
  <v-marker class="marker" :point="{ lng: 121.461658, lat: 31.20117 }"></v-marker>
</div>

<style lang="less" scoped>
.demo-block{
  display: flex;
  .marker{
    width: 350px;
    height: 200px;
    margin-right: 10px;
  }
}
</style>
```
:::

## Attributes

| 参数           | 说明        | 类型                         | 说明               |
| ------------- | ---------- | --------------------------   | ----------------- |
| point         | 标记点坐标   | Array / Object               | 可用使用数组传入[lng, lat], 也可以使用对象传入                 |

## 其他

```
组件需要给定宽高样式才可以正常显示, 默认宽高都是0
```
