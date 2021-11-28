'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var hHelper = require('../h-helper.js');
var styleHelper = require('./style-helper.js');

var TableFooter = vue.defineComponent({
  name: "ElTableFooter",
  props: {
    fixed: {
      type: String,
      default: ""
    },
    store: {
      required: true,
      type: Object
    },
    summaryMethod: Function,
    sumText: String,
    border: Boolean,
    defaultSort: {
      type: Object,
      default: () => {
        return {
          prop: "",
          order: ""
        };
      }
    }
  },
  setup(props) {
    const { hasGutter, getRowClasses, columns } = styleHelper["default"](props);
    return {
      getRowClasses,
      hasGutter,
      columns
    };
  },
  render() {
    let sums = [];
    if (this.summaryMethod) {
      sums = this.summaryMethod({
        columns: this.columns,
        data: this.store.states.data.value
      });
    } else {
      this.columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = this.sumText;
          return;
        }
        const values = this.store.states.data.value.map((item) => Number(item[column.property]));
        const precisions = [];
        let notNumber = true;
        values.forEach((value) => {
          if (!isNaN(value)) {
            notNumber = false;
            const decimal = `${value}`.split(".")[1];
            precisions.push(decimal ? decimal.length : 0);
          }
        });
        const precision = Math.max.apply(null, precisions);
        if (!notNumber) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!isNaN(value)) {
              return parseFloat((prev + curr).toFixed(Math.min(precision, 20)));
            } else {
              return prev;
            }
          }, 0);
        } else {
          sums[index] = "";
        }
      });
    }
    return vue.h("table", {
      class: "el-table__footer",
      cellspacing: "0",
      cellpadding: "0",
      border: "0"
    }, [
      hHelper.hColgroup(this.columns, this.hasGutter),
      vue.h("tbody", {
        class: [{ "has-gutter": this.hasGutter }]
      }, [
        vue.h("tr", {}, [
          ...this.columns.map((column, cellIndex) => vue.h("td", {
            key: cellIndex,
            colspan: column.colSpan,
            rowspan: column.rowSpan,
            class: [
              ...this.getRowClasses(column, cellIndex),
              "el-table__cell"
            ]
          }, [
            vue.h("div", {
              class: ["cell", column.labelClassName]
            }, [sums[cellIndex]])
          ])),
          this.hasGutter && hHelper.hGutter()
        ])
      ])
    ]);
  }
});

exports["default"] = TableFooter;
//# sourceMappingURL=index.js.map
