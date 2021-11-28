import './src/index.mjs';
import script from './src/index.vue_vue_type_script_lang.mjs';

script.install = (app) => {
  app.component(script.name, script);
};
const _Autocomplete = script;
const ElAutocomplete = _Autocomplete;

export { ElAutocomplete, _Autocomplete as default };
//# sourceMappingURL=index.mjs.map
