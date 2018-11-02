# vmap 基础地图

---

### 基础用法

用于展示地图并获取地图实例, 实现高度定制化功能。

其他所有地图组件均依赖vmap组件

<div class="demo-block">
   <v-map class="map">
</div>

<style lang="less" scoped>
.map{
  width: 350px;
  height: 200px;
}
</style>

::: demo

```html
<div class="demo-block">
   <v-map class="map">
</div>

<style lang="less" scoped>
.map{
  width: 350px;
  height: 200px;
}
</style>
```
:::

## Attributes

| 参数          | 说明       | 类型                       | 可选值 | 默认值      |
| ------------- | ---------- | -------------------------- | ------ | ----------- |
| point         | 标记点坐标 | Array / Object                     | -      | -           |

## Methods

| 方法名                               | 说明                                         | 参数      |
|------------------------------------ |-------------------------------------------- |---------- |
| getMap | 返回包含map实例的promise |

## 其他

通过 
```js
const map = await this.$refs.amap.getMap()
```
获取到地图实例, 从而可以进行复杂的交互实现, map实例与高德地图SDK提供的map实例完全一致