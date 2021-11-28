import { buildProps } from '../../../utils/props.mjs';

const dividerProps = buildProps({
  direction: {
    type: String,
    values: ["horizontal", "vertical"],
    default: "horizontal"
  },
  contentPosition: {
    type: String,
    values: ["left", "center", "right"],
    default: "center"
  }
});

export { dividerProps };
//# sourceMappingURL=divider.mjs.map
