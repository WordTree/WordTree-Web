import { Back } from '@element-plus/icons';

const pageHeaderProps = {
  icon: {
    type: [String, Object],
    default: Back
  },
  title: String,
  content: {
    type: String,
    default: ""
  }
};
const pageHeaderEmits = {
  back: () => true
};

export { pageHeaderEmits, pageHeaderProps };
//# sourceMappingURL=page-header.mjs.map
