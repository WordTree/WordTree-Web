import { withInstall, withNoopInstall } from '../../utils/with-install.mjs';
import './src/select.mjs';
import './src/option.mjs';
import './src/option-group.mjs';
export { selectGroupKey, selectKey } from './src/token.mjs';
import script from './src/select.vue_vue_type_script_lang.mjs';
import script$1 from './src/option.vue_vue_type_script_lang.mjs';
import script$2 from './src/option-group.vue_vue_type_script_lang.mjs';

const ElSelect = withInstall(script, {
  Option: script$1,
  OptionGroup: script$2
});
const ElOption = withNoopInstall(script$1);
const ElOptionGroup = withNoopInstall(script$2);

export { ElOption, ElOptionGroup, ElSelect, ElSelect as default };
//# sourceMappingURL=index.mjs.map
