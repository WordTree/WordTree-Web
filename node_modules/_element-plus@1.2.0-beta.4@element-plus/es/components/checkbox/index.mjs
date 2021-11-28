import { withInstall, withNoopInstall } from '../../utils/with-install.mjs';
import './src/checkbox.mjs';
import './src/checkbox-button.mjs';
import './src/checkbox-group.mjs';
import script from './src/checkbox.vue_vue_type_script_lang.mjs';
import script$1 from './src/checkbox-button.vue_vue_type_script_lang.mjs';
import script$2 from './src/checkbox-group.vue_vue_type_script_lang.mjs';

const ElCheckbox = withInstall(script, {
  CheckboxButton: script$1,
  CheckboxGroup: script$2
});
const ElCheckboxButton = withNoopInstall(script$1);
const ElCheckboxGroup = withNoopInstall(script$2);

export { ElCheckbox, ElCheckboxButton, ElCheckboxGroup, ElCheckbox as default };
//# sourceMappingURL=index.mjs.map
