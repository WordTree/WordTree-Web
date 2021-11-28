import { buildProps, definePropType } from '../../../utils/props.mjs';

const breadcrumbItemProps = buildProps({
  to: {
    type: definePropType([String, Object]),
    default: ""
  },
  replace: {
    type: Boolean,
    default: false
  }
});

export { breadcrumbItemProps };
//# sourceMappingURL=breadcrumb-item.mjs.map
