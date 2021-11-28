import { withInstall, withNoopInstall } from '../../utils/with-install.mjs';
import './src/main.mjs';
import './src/item.mjs';
import script from './src/main.vue_vue_type_script_lang.mjs';
import script$1 from './src/item.vue_vue_type_script_lang.mjs';

const ElCarousel = withInstall(script, {
  CarouselItem: script$1
});
const ElCarouselItem = withNoopInstall(script$1);

export { ElCarousel, ElCarouselItem, ElCarousel as default };
//# sourceMappingURL=index.mjs.map
