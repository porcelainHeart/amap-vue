import Marker from './src/index.vue';

Marker.install = (Vue) => {
  Vue.component(Marker.name, Marker);
};

export default Marker;
