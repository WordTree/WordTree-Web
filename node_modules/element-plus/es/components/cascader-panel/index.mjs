import './src/index.mjs';
export { CASCADER_PANEL_INJECTION_KEY, ExpandTrigger } from './src/types.mjs';
export { CommonProps, DefaultProps, useCascaderConfig } from './src/config.mjs';
import script from './src/index.vue_vue_type_script_lang.mjs';

script.install = (app) => {
  app.component(script.name, script);
};
const _CascaderPanel = script;
const ElCascaderPanel = _CascaderPanel;

export { ElCascaderPanel, _CascaderPanel as default };
//# sourceMappingURL=index.mjs.map
