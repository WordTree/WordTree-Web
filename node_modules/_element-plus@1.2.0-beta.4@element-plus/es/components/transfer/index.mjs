import './src/index.mjs';
import './src/transfer.mjs';
import script from './src/index.vue_vue_type_script_lang.mjs';
export { CHANGE_EVENT } from '../../utils/constants.mjs';

script.install = (app) => {
  app.component(script.name, script);
};
const _Transfer = script;
const ElTransfer = _Transfer;

export { ElTransfer, _Transfer as default };
//# sourceMappingURL=index.mjs.map
