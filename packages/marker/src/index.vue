<template lang="pug">
v-map.map(ref="amap")
</template>

<script>
import VMap from 'packages/vmap';

export default {
  name: 'VMarker',
  components: {
    VMap,
  },
  props: {
    point: {
      required: true,
      type: [Object, Array]
    }
  },
  data() {
    return {
      map: null
    };
  },
  computed: {},
  async mounted() {
    const position = Array.isArray(this.point) ? this.point : [this.point.lng, this.point.lat];
    if (!position[0]) return;
    this.map = await this.$refs.amap.getMap();
    const marker = new window.AMap.Marker({
      icon: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_r.png',
      position,
    });
    marker.setMap(this.map);
    this.map.setZoomAndCenter(14, position);
  },
};
</script>
