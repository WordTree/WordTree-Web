'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var token = require('./token.js');

var script = vue.defineComponent({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const visible = vue.ref(true);
    const instance = vue.getCurrentInstance();
    const children = vue.ref([]);
    vue.provide(token.selectGroupKey, vue.reactive({
      ...vue.toRefs(props)
    }));
    const select = vue.inject(token.selectKey);
    vue.onMounted(() => {
      children.value = flattedChildren(instance.subTree);
    });
    const flattedChildren = (node) => {
      const children2 = [];
      if (Array.isArray(node.children)) {
        node.children.forEach((child) => {
          var _a;
          if (child.type && child.type.name === "ElOption" && child.component && child.component.proxy) {
            children2.push(child.component.proxy);
          } else if ((_a = child.children) == null ? void 0 : _a.length) {
            children2.push(...flattedChildren(child));
          }
        });
      }
      return children2;
    };
    const { groupQueryChange } = vue.toRaw(select);
    vue.watch(groupQueryChange, () => {
      visible.value = children.value.some((option) => option.visible === true);
    });
    return {
      visible
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=option-group.vue_vue_type_script_lang.js.map
