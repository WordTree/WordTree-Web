import { withInstall } from '../../utils/with-install.mjs';
import './src/dialog2.mjs';
export { useDialog } from './src/use-dialog.mjs';
export { dialogEmits, dialogProps } from './src/dialog.mjs';
import script from './src/dialog.vue_vue_type_script_lang.mjs';

const ElDialog = withInstall(script);

export { ElDialog, ElDialog as default };
//# sourceMappingURL=index.mjs.map
