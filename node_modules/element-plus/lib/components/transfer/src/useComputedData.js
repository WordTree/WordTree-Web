'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const useComputedData = (props) => {
  const propsKey = vue.computed(() => props.props.key);
  const dataObj = vue.computed(() => {
    return props.data.reduce((o, cur) => (o[cur[propsKey.value]] = cur) && o, {});
  });
  const sourceData = vue.computed(() => {
    return props.data.filter((item) => !props.modelValue.includes(item[propsKey.value]));
  });
  const targetData = vue.computed(() => {
    if (props.targetOrder === "original") {
      return props.data.filter((item) => props.modelValue.includes(item[propsKey.value]));
    } else {
      return props.modelValue.reduce((arr, cur) => {
        const val = dataObj.value[cur];
        if (val) {
          arr.push(val);
        }
        return arr;
      }, []);
    }
  });
  return {
    propsKey,
    sourceData,
    targetData
  };
};

exports.useComputedData = useComputedData;
//# sourceMappingURL=useComputedData.js.map
