import { buildProp, definePropType, buildProps, mutable } from '../../../utils/props.mjs';
import { VERTICAL } from './defaults.mjs';

const itemSize = buildProp({
  type: definePropType([Number, Function]),
  required: true
});
const estimatedItemSize = buildProp({
  type: Number
});
const cache = buildProp({
  type: Number,
  default: 2
});
const direction = buildProp({
  type: String,
  values: ["ltr", "rtl"],
  default: "ltr"
});
const initScrollOffset = buildProp({
  type: Number,
  default: 0
});
const total = buildProp({
  type: Number,
  required: true
});
const layout = buildProp({
  type: String,
  values: ["horizontal", "vertical"],
  default: VERTICAL
});
const virtualizedProps = buildProps({
  className: {
    type: String,
    default: ""
  },
  containerElement: {
    type: definePropType([String, Object]),
    default: "div"
  },
  data: {
    type: definePropType(Array),
    default: () => mutable([])
  },
  direction,
  height: {
    type: [String, Number],
    required: true
  },
  innerElement: {
    type: [String, Object],
    default: "div"
  },
  style: {
    type: definePropType([Object, String, Array])
  },
  useIsScrolling: {
    type: Boolean,
    default: false
  },
  width: {
    type: [Number, String],
    required: false
  },
  perfMode: {
    type: Boolean,
    default: true
  },
  scrollbarAlwaysOn: {
    type: Boolean,
    default: false
  }
});
const virtualizedListProps = buildProps({
  cache,
  estimatedItemSize,
  layout,
  initScrollOffset,
  total,
  itemSize,
  ...virtualizedProps
});
const virtualizedGridProps = buildProps({
  columnCache: cache,
  columnWidth: itemSize,
  estimatedColumnWidth: estimatedItemSize,
  estimatedRowHeight: estimatedItemSize,
  initScrollLeft: initScrollOffset,
  initScrollTop: initScrollOffset,
  rowCache: cache,
  rowHeight: itemSize,
  totalColumn: total,
  totalRow: total,
  ...virtualizedProps
});
const virtualizedScrollbarProps = buildProps({
  layout,
  total,
  ratio: {
    type: Number,
    required: true
  },
  clientSize: {
    type: Number,
    required: true
  },
  scrollFrom: {
    type: Number,
    required: true
  },
  visible: Boolean
});

export { virtualizedGridProps, virtualizedListProps, virtualizedProps, virtualizedScrollbarProps };
//# sourceMappingURL=props.mjs.map
