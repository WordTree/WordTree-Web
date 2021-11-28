import { isArray } from '@vue/shared';

const flattenOptions = (options) => {
  const flattened = [];
  options.map((option) => {
    if (isArray(option.options)) {
      flattened.push({
        label: option.label,
        isTitle: true,
        type: "Group"
      });
      option.options.forEach((o) => {
        flattened.push(o);
      });
      flattened.push({
        type: "Group"
      });
    } else {
      flattened.push(option);
    }
  });
  return flattened;
};

export { flattenOptions };
//# sourceMappingURL=util.mjs.map
