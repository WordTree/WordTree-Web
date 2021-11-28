import './src/index.mjs';
import script from './src/index.vue_vue_type_script_lang.mjs';

script.install = (app) => {
  app.component(script.name, script);
};
const _Upload = script;
const ElUpload = _Upload;

export { ElUpload, _Upload as default };
//# sourceMappingURL=index.mjs.map
