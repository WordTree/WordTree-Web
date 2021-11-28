'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

function useMapState() {
  const instance = vue.getCurrentInstance();
  const table = instance.parent;
  const store = table.store;
  const leftFixedLeafCount = vue.computed(() => {
    return store.states.fixedLeafColumnsLength.value;
  });
  const rightFixedLeafCount = vue.computed(() => {
    return store.states.rightFixedColumns.value.length;
  });
  const columnsCount = vue.computed(() => {
    return store.states.columns.value.length;
  });
  const leftFixedCount = vue.computed(() => {
    return store.states.fixedColumns.value.length;
  });
  const rightFixedCount = vue.computed(() => {
    return store.states.rightFixedColumns.value.length;
  });
  return {
    leftFixedLeafCount,
    rightFixedLeafCount,
    columnsCount,
    leftFixedCount,
    rightFixedCount,
    columns: store.states.columns
  };
}

exports["default"] = useMapState;
//# sourceMappingURL=mapState-helper.js.map
