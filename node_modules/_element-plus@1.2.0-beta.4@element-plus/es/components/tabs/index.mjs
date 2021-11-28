import { withInstall, withNoopInstall } from '../../utils/with-install.mjs';
import Tabs from './src/tabs.mjs';
export { tabsEmits, tabsProps } from './src/tabs.mjs';
import './src/tab-pane2.mjs';
export { tabBar } from './src/tab-bar.mjs';
export { tabNavProps } from './src/tab-nav.mjs';
export { tabPaneProps } from './src/tab-pane.mjs';
import script from './src/tab-pane.vue_vue_type_script_lang.mjs';

const ElTabs = withInstall(Tabs, {
  TabPane: script
});
const ElTabPane = withNoopInstall(script);

export { ElTabPane, ElTabs, ElTabs as default };
//# sourceMappingURL=index.mjs.map
