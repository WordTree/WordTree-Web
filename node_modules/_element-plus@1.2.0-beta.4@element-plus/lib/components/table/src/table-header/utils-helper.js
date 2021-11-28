'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const getAllColumns = (columns) => {
  const result = [];
  columns.forEach((column) => {
    if (column.children) {
      result.push(column);
      result.push.apply(result, getAllColumns(column.children));
    } else {
      result.push(column);
    }
  });
  return result;
};
const convertToRows = (originColumns) => {
  let maxLevel = 1;
  const traverse = (column, parent) => {
    if (parent) {
      column.level = parent.level + 1;
      if (maxLevel < column.level) {
        maxLevel = column.level;
      }
    }
    if (column.children) {
      let colSpan = 0;
      column.children.forEach((subColumn) => {
        traverse(subColumn, column);
        colSpan += subColumn.colSpan;
      });
      column.colSpan = colSpan;
    } else {
      column.colSpan = 1;
    }
  };
  originColumns.forEach((column) => {
    column.level = 1;
    traverse(column, void 0);
  });
  const rows = [];
  for (let i = 0; i < maxLevel; i++) {
    rows.push([]);
  }
  const allColumns = getAllColumns(originColumns);
  allColumns.forEach((column) => {
    if (!column.children) {
      column.rowSpan = maxLevel - column.level + 1;
    } else {
      column.rowSpan = 1;
    }
    rows[column.level - 1].push(column);
  });
  return rows;
};
function useUtils(props) {
  const instance = vue.getCurrentInstance();
  const parent = instance.parent;
  const columnRows = vue.computed(() => {
    return convertToRows(props.store.states.originColumns.value);
  });
  const isGroup = vue.computed(() => {
    const result = columnRows.value.length > 1;
    if (result)
      parent.state.isGroup.value = true;
    return result;
  });
  const toggleAllSelection = (event) => {
    event.stopPropagation();
    parent.store.commit("toggleAllSelection");
  };
  return {
    isGroup,
    toggleAllSelection,
    columnRows
  };
}

exports["default"] = useUtils;
//# sourceMappingURL=utils-helper.js.map
