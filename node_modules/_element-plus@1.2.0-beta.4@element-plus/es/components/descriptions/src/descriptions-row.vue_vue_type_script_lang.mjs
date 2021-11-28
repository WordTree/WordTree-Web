import { defineComponent, inject } from 'vue';
import DescriptionsCell from './descriptions-cell.mjs';
import { elDescriptionsKey } from './token.mjs';

var script = defineComponent({
  name: "ElDescriptionsRow",
  components: {
    [DescriptionsCell.name]: DescriptionsCell
  },
  props: {
    row: {
      type: Array
    }
  },
  setup() {
    const descriptions = inject(elDescriptionsKey, {});
    return {
      descriptions
    };
  }
});

export { script as default };
//# sourceMappingURL=descriptions-row.vue_vue_type_script_lang.mjs.map
