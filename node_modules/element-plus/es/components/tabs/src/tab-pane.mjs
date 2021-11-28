import { buildProps } from '../../../utils/props.mjs';

const tabPaneProps = buildProps({
  label: {
    type: String,
    default: ""
  },
  name: {
    type: String,
    default: ""
  },
  closable: Boolean,
  disabled: Boolean,
  lazy: Boolean
});

export { tabPaneProps };
//# sourceMappingURL=tab-pane.mjs.map
