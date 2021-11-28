import './src/tree.mjs';
import script from './src/tree.vue_vue_type_script_lang.mjs';

script.install = (app) => {
  app.component(script.name, script);
};
const _Tree = script;
const ElTree = _Tree;

export { ElTree, _Tree as default };
//# sourceMappingURL=index.mjs.map
