import './src/index.mjs';
import './src/slider.type.mjs';
import script from './src/index.vue_vue_type_script_lang.mjs';

script.install = (app) => {
  app.component(script.name, script);
};
const _Slider = script;
const ElSlider = _Slider;

export { ElSlider, _Slider as default };
//# sourceMappingURL=index.mjs.map
