import { h } from 'vue';
import { ElCheckbox } from '../../checkbox/index.mjs';
import { ElIcon } from '../../icon/index.mjs';
import { ArrowRight, Loading } from '@element-plus/icons';
import { getPropByPath } from '../../../utils/util.mjs';

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
      return h(ElCheckbox, {
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
      return h(ElCheckbox, {
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
      return h("div", {}, [i]);
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
      return h("div", {
        class: classes,
        onClick: callback
      }, {
        default: () => {
          return [
            h(ElIcon, null, {
              default: () => {
                return [h(ArrowRight)];
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
  const value = property && getPropByPath(row, property, false).v;
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
    ele.push(h("span", {
      class: "el-table__indent",
      style: { "padding-left": `${treeNode.indent}px` }
    }));
  }
  if (typeof treeNode.expanded === "boolean" && !treeNode.noLazyChildren) {
    const expandClasses = [
      "el-table__expand-icon",
      treeNode.expanded ? "el-table__expand-icon--expanded" : ""
    ];
    let icon = ArrowRight;
    if (treeNode.loading) {
      icon = Loading;
    }
    ele.push(h("div", {
      class: expandClasses,
      onClick: callback
    }, {
      default: () => {
        return [
          h(ElIcon, { class: { "is-loading": treeNode.loading } }, {
            default: () => [h(icon)]
          })
        ];
      }
    }));
  } else {
    ele.push(h("span", {
      class: "el-table__placeholder"
    }));
  }
  return ele;
}

export { cellForced, cellStarts, defaultRenderCell, treeCellPrefix };
//# sourceMappingURL=config.mjs.map
