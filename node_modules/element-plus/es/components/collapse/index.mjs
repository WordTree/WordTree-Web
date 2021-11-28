import { withInstall, withNoopInstall } from '../../utils/with-install.mjs';
import './src/collapse.mjs';
import './src/collapse-item.mjs';
import script from './src/collapse.vue_vue_type_script_lang.mjs';
import script$1 from './src/collapse-item.vue_vue_type_script_lang.mjs';

const ElCollapse = withInstall(script, {
  CollapseItem: script$1
});
const ElCollapseItem = withNoopInstall(script$1);

export { ElCollapse, ElCollapseItem, ElCollapse as default };
//# sourceMappingURL=index.mjs.map
