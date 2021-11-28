'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var props = require('../../../../utils/props.js');
var datePicker_type = require('../date-picker.type.js');

var ElDatePickerCell = vue.defineComponent({
  name: "ElDatePickerCell",
  props: props.buildProps({
    cell: {
      type: props.definePropType(Object)
    }
  }),
  setup(props) {
    const picker = vue.inject(datePicker_type.ROOT_PICKER_INJECTION_KEY);
    return () => {
      const cell = props.cell;
      return (picker == null ? void 0 : picker.ctx.slots.default) ? picker.ctx.slots.default(cell) : vue.h("div", {
        class: "el-date-table-cell"
      }, [
        vue.h("span", {
          class: "el-date-table-cell__text"
        }, [cell == null ? void 0 : cell.text])
      ]);
    };
  }
});

exports["default"] = ElDatePickerCell;
//# sourceMappingURL=basic-cell-render.js.map
