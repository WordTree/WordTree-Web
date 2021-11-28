import { defineComponent, inject, h } from 'vue';
import { buildProps, definePropType } from '../../../../utils/props.mjs';
import { ROOT_PICKER_INJECTION_KEY } from '../date-picker.type.mjs';

var ElDatePickerCell = defineComponent({
  name: "ElDatePickerCell",
  props: buildProps({
    cell: {
      type: definePropType(Object)
    }
  }),
  setup(props) {
    const picker = inject(ROOT_PICKER_INJECTION_KEY);
    return () => {
      const cell = props.cell;
      return (picker == null ? void 0 : picker.ctx.slots.default) ? picker.ctx.slots.default(cell) : h("div", {
        class: "el-date-table-cell"
      }, [
        h("span", {
          class: "el-date-table-cell__text"
        }, [cell == null ? void 0 : cell.text])
      ]);
    };
  }
});

export { ElDatePickerCell as default };
//# sourceMappingURL=basic-cell-render.mjs.map
