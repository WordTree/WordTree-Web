import { buildProps, definePropType } from '../../../utils/props.mjs';

const breadcrumbProps = buildProps({
  separator: {
    type: String,
    default: "/"
  },
  separatorIcon: {
    type: definePropType([String, Object]),
    default: ""
  }
});

export { breadcrumbProps };
//# sourceMappingURL=breadcrumb.mjs.map
