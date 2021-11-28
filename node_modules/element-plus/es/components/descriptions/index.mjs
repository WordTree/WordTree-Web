import { withInstall, withNoopInstall } from '../../utils/with-install.mjs';
import './src/index.mjs';
import DescriptionsItem from './src/description-item.mjs';
import script from './src/index.vue_vue_type_script_lang.mjs';

const ElDescriptions = withInstall(script, {
  DescriptionsItem
});
const ElDescriptionsItem = withNoopInstall(DescriptionsItem);

export { ElDescriptions, ElDescriptionsItem, ElDescriptions as default };
//# sourceMappingURL=index.mjs.map
