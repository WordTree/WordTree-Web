'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index = require('../../icon/index.js');

var script = vue.defineComponent({
  name: "ElTimelineItem",
  components: {
    ElIcon: index.ElIcon
  },
  props: {
    timestamp: {
      type: String,
      default: ""
    },
    hideTimestamp: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: false
    },
    placement: {
      type: String,
      default: "bottom"
    },
    type: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "normal"
    },
    icon: {
      type: [String, Object],
      default: ""
    },
    hollow: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    vue.inject("timeline");
  }
});

exports["default"] = script;
//# sourceMappingURL=item.vue_vue_type_script_lang.js.map
