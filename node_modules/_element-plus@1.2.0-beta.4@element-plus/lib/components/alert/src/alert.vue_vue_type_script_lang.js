'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index = require('../../icon/index.js');
var icon = require('../../../utils/icon.js');
var alert = require('./alert.js');

var script = vue.defineComponent({
  name: "ElAlert",
  components: {
    ElIcon: index.ElIcon,
    ...icon.TypeComponents
  },
  props: alert.alertProps,
  emits: alert.alertEmits,
  setup(props, { emit, slots }) {
    const visible = vue.ref(true);
    const typeClass = vue.computed(() => `el-alert--${props.type}`);
    const iconComponent = vue.computed(() => icon.TypeComponentsMap[props.type] || icon.TypeComponentsMap["info"]);
    const isBigIcon = vue.computed(() => props.description || slots.default ? "is-big" : "");
    const isBoldTitle = vue.computed(() => props.description || slots.default ? "is-bold" : "");
    const close = (evt) => {
      visible.value = false;
      emit("close", evt);
    };
    return {
      visible,
      typeClass,
      iconComponent,
      isBigIcon,
      isBoldTitle,
      close
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=alert.vue_vue_type_script_lang.js.map
