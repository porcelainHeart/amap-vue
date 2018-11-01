<template lang="pug">
  .side-nav
    .group-container(v-for="title in (Object.keys(data))", :key="title")
      .side-nav-title {{ title }}
      .side-nav-items(
        v-for="nav in data[title]"
        v-if="nav.desc"
        :key="nav.name"
      )
        router-link(
          v-if="nav.name"
          :class="$route.name===nav.name ? 'active' : ''"
          :to="{name: nav.name}"
        ) {{ nav.desc }}
        p.side-nav-group(v-else) {{ nav.desc }}
        div(v-for="item in nav.items", :key="item.name")
          router-link.slid-nav-component(
            :to="{name: item.name}"
            :class="$route.name===item.name ? 'active' : ''"
          ) {{ item.desc }}
</template>

<script>
import navConf from '../nav.config.json';

export default {
  data() {
    return {
      data: navConf
    };
  }
};
</script>

<style lang="less" type="text/less">
  .side-nav{
    display: inline-block;
    margin: 32px 0;
    padding: 0;
    color: #3F536E;
    background-color: #fff;
    z-index: 99;
    .group-container{
      margin-bottom: 32px;
    }
    .side-nav-title{
      padding: 0 24px 8px;
      color: #8DABC4;
      font-size: 12px;
      font-weight: bold;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
    .side-nav-items{
      font-size: 14px;
      font-weight: normal;
      line-height: 1.8;
      a{
        display: block;
        position: relative;
        padding: 8px 24px;
        color: #3F536E;
        font-weight: normal;
        line-height: 1.5;
        cursor: pointer;
      }
      .side-nav-group{
        display: block;
        position: relative;
        padding: 6px 0 6px 24px;
        color: #2C405A;
        font-weight: bold;
      }
      .slid-nav-component{
        display: block;
        position: relative;
        padding: 6px 24px 6px 32px;
        color: #616367;
        font-size: 14px;
      }
      .active{
        color: #3FAAF5;
      }
    }
  }
</style>
