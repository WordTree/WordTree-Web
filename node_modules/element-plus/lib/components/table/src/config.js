'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index = require('../../checkbox/index.js');
var index$1 = require('../../icon/index.js');
var icons = require('@element-plus/icons');
var util = require('../../../utils/util.js');

const cellStarts = {
  default: {
    order: ""
  },
  selection: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: "",
    className: "el-table-column--selection"
  },
  expand: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ""
  },
  index: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ""
  }
};
const cellForced = {
  selection: {
    renderHeader({ store }) {
      function isDisabled() {
        return store.states.data.value && store.states.data.value.length === 0;
      }
      return vue.h(index.ElCheckbox, {
        disabled: isDisabled(),
        size: store.states.tableSize.value,
        indeterminate: store.states.selection.value.length > 0 && !store.states.isAllSelected.value,
        "onUpdate:modelValue": store.toggleAllSelection,
        modelValue: store.states.isAllSelected.value
      });
    },
    renderCell({
      row,
      column,
      store,
      $index
    }) {
      return vue.h(index.ElCheckbox, {
        disabled: column.selectable ? !column.selectable.call(null, row, $index) : false,
        size: store.states.tableSize.value,
        onChange: () => {
          store.commit("rowSelectedChanged", row);
        },
        onClick: (event) => event.stopPropagation(),
        modelValue: store.isSelected(row)
      });
    },
    sortable: false,
    resizable: false
  },
  index: {
    renderHeader({ column }) {
      return column.label || "#";
    },
    renderCell({
      column,
      $index
    }) {
      let i = $index + 1;
      const index = column.index;
      if (typeof index === "number") {
        i = $index + index;
      } else if (typeof index === "function") {
        i = index($index);
      }
      return vue.h("div", {}, [i]);
    },
    sortable: false
  },
  expand: {
    renderHeader({ column }) {
      return column.label || "";
    },
    renderCell({ row, store }) {
      const classes = ["el-table__expand-icon"];
      if (store.states.expandRows.value.indexOf(row) > -1) {
        classes.push("el-table__expand-icon--expanded");
      }
      const callback = function(e) {
        e.stopPropagation();
        store.toggleRowExpansion(row);
      };
      return vue.h("div", {
        class: classes,
        onClick: callback
      }, {
        default: () => {
          return [
            vue.h(index$1.ElIcon, null, {
              default: () => {
                return [vue.h(icons.ArrowRight)];
              }
            })
          ];
        }
      });
    },
    sortable: false,
    resizable: false,
    className: "el-table__expand-column"
  }
};
function defaultRenderCell({
  row,
  column,
  $index
}) {
  var _a;
  const property = column.property;
  const value = property && util.getPropByPath(row, property, false).v;
  if (column && column.formatter) {
    return column.formatter(row, column, value, $index);
  }
  return ((_a = value == null ? void 0 : value.toString) == null ? void 0 : _a.call(value)) || "";
}
function treeCellPrefix({
  row,
  treeNode,
  store
}) {
  if (!treeNode)
    return null;
  const ele = [];
  const callback = function(e) {
    e.stopPropagation();
    store.loadOrToggle(row);
  };
  if (treeNode.indent) {
    ele.push(vue.h("span", {
      class: "el-table__indent",
      style: { "padding-left": `${treeNode.indent}px` }
    }));
  }
  if (typeof treeNode.expanded === "boolean" && !treeNode.noLazyChildren) {
    const expandClasses = [
      "el-table__expand-icon",
      treeNode.expanded ? "el-table__expand-icon--expanded" : ""
    ];
    let icon = icons.ArrowRight;
    if (treeNode.loading) {
      icon = icons.Loading;
    }
    ele.push(vue.h("div", {
      class: expandClasses,
      onClick: callback
    }, {
      default: () => {
        return [
          vue.h(index$1.ElIcon, { class: { "is-loading": treeNode.loading } }, {
            default: () => [vue.h(icon)]
          })
        ];
      }
    }));
  } else {
    ele.push(vue.h("span", {
      class: "el-table__placeholder"
    }));
  }
  return ele;
}

exports.cellForced = cellForced;
exports.cellStarts = cellStarts;
exports.defaultRenderCell = defaultRenderCell;
exports.treeCellPrefix = treeCellPrefix;
//# sourceMappingURL=config.js.map
