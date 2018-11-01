<template lang="pug">
  .vmap
</template>
<script>
let loadMapPromise;
function loadMap() {
  if (!loadMapPromise) {
    loadMapPromise = new Promise((resolve, reject) => {
      window.amapInit = () => {
        window.initAMapUI();
        resolve(window.AMap);
      };
      const url = `http://webapi.amap.com/maps?v=1.4.2&key=${window.$$_amap_key}&callback=amapInit`;
      const uiUrl = 'http://webapi.amap.com/ui/1.0/main-async.js?v=1.0.11';
      const scriptEl = document.createElement('script');
      const uiScriptEl = document.createElement('script');
      scriptEl.type = 'text/javascript';
      scriptEl.src = url;
      scriptEl.onerror = e => reject(e.error);
      uiScriptEl.type = 'text/javascript';
      uiScriptEl.src = uiUrl;
      uiScriptEl.onerror = e => reject(e.error);
      document.head.appendChild(scriptEl);
      document.head.appendChild(uiScriptEl);
    });
  }
  return loadMapPromise;
}

export default {
  name: 'VMap',
  mounted() {
    this.mapPromise = this.initMap();
  },
  methods: {
    initMap() {
      return new Promise(resolve => loadMap().then((AMap) => {
        window.AMap = AMap;
        const map = new AMap.Map(this.$el);
        const onComplete = () => {
          map.off('complete', onComplete);
          resolve(map);
        };
        map.on('complete', onComplete);
      }));
    },
    getMap() {
      return this.mapPromise;
    },
  },
};
</script>
