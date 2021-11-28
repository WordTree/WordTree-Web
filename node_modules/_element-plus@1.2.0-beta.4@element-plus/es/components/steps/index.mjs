import { withInstall, withNoopInstall } from '../../utils/with-install.mjs';
import './src/index.mjs';
import './src/item.mjs';
import script from './src/index.vue_vue_type_script_lang.mjs';
import script$1 from './src/item.vue_vue_type_script_lang.mjs';

const ElSteps = withInstall(script, {
  Step: script$1
});
const ElStep = withNoopInstall(script$1);

export { ElStep, ElSteps, ElSteps as default };
//# sourceMappingURL=index.mjs.map
