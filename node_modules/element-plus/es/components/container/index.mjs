import { withInstall, withNoopInstall } from '../../utils/with-install.mjs';
import './src/container.mjs';
import './src/aside.mjs';
import './src/footer.mjs';
import './src/header.mjs';
import './src/main.mjs';
import script from './src/container.vue_vue_type_script_lang.mjs';
import script$1 from './src/aside.vue_vue_type_script_lang.mjs';
import script$2 from './src/footer.vue_vue_type_script_lang.mjs';
import script$3 from './src/header.vue_vue_type_script_lang.mjs';
import script$4 from './src/main.vue_vue_type_script_lang.mjs';

const ElContainer = withInstall(script, {
  Aside: script$1,
  Footer: script$2,
  Header: script$3,
  Main: script$4
});
const ElAside = withNoopInstall(script$1);
const ElFooter = withNoopInstall(script$2);
const ElHeader = withNoopInstall(script$3);
const ElMain = withNoopInstall(script$4);

export { ElAside, ElContainer, ElFooter, ElHeader, ElMain, ElContainer as default };
//# sourceMappingURL=index.mjs.map
