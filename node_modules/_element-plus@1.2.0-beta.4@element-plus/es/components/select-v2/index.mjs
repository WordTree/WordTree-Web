import './src/select.mjs';
export { selectV2InjectionKey } from './src/token.mjs';
import script from './src/select.vue_vue_type_script_lang.mjs';

script.install = (app) => {
  app.component(script.name, script);
};
const _Select = script;
const ElSelectV2 = _Select;

export { ElSelectV2, _Select as default };
//# sourceMappingURL=index.mjs.map
