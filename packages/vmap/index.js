import VMap from './src/index.vue';

VMap.install = (Vue) => {
  Vue.component(VMap.name, VMap);
};

export default VMap;
