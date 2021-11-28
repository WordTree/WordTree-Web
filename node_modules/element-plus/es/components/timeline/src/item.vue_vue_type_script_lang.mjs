import { defineComponent, inject } from 'vue';
import { ElIcon } from '../../icon/index.mjs';

var script = defineComponent({
  name: "ElTimelineItem",
  components: {
    ElIcon
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
    inject("timeline");
  }
});

export { script as default };
//# sourceMappingURL=item.vue_vue_type_script_lang.mjs.map
