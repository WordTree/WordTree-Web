import './src/index.mjs';
import script from './src/index.vue_vue_type_script_lang.mjs';

script.install = (app) => {
  app.component(script.name, script);
};
const _ColorPicker = script;
const ElColorPicker = _ColorPicker;

export { ElColorPicker, _ColorPicker as default };
//# sourceMappingURL=index.mjs.map
