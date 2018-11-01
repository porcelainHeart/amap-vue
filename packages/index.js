import VMap from './vmap';
import VMarker from './marker';

const components = [
  VMap,
  VMarker,
];

const install = (Vue, options) => {
  if (install.installed) return;
  window.$$_amap_key = options.key || '';
  components.map(component => Vue.component(component.name, component));
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ...components
};
