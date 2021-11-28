import { buildProps } from '../../../utils/props.mjs';

const barProps = buildProps({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: true
  },
  always: Boolean
});

export { barProps };
//# sourceMappingURL=bar.mjs.map
