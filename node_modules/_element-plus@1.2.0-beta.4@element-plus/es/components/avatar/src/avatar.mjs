import { buildProps, definePropType } from '../../../utils/props.mjs';

const avatarProps = buildProps({
  size: {
    type: [Number, String],
    values: ["large", "medium", "small"],
    default: "large",
    validator: (val) => typeof val === "number"
  },
  shape: {
    type: String,
    values: ["circle", "square"],
    default: "circle"
  },
  icon: {
    type: definePropType([String, Object])
  },
  src: {
    type: String,
    default: ""
  },
  alt: String,
  srcSet: String,
  fit: {
    type: definePropType(String),
    default: "cover"
  }
});
const avatarEmits = {
  error: (evt) => evt instanceof Event
};

export { avatarEmits, avatarProps };
//# sourceMappingURL=avatar.mjs.map
