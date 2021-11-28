import { withInstall, withNoopInstall } from '../../utils/with-install.mjs';
import './src/index.mjs';
import './src/item.mjs';
import script from './src/index.vue_vue_type_script_lang.mjs';
import script$1 from './src/item.vue_vue_type_script_lang.mjs';

const ElTimeline = withInstall(script, {
  TimelineItem: script$1
});
const ElTimelineItem = withNoopInstall(script$1);

export { ElTimeline, ElTimelineItem, ElTimeline as default };
//# sourceMappingURL=index.mjs.map
