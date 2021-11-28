import { h } from 'vue';

function hGutter() {
  return h("col", {
    name: "gutter"
  });
}
function hColgroup(columns, hasGutter = false) {
  return h("colgroup", {}, [
    ...columns.map((column) => h("col", {
      name: column.id,
      key: column.id
    })),
    hasGutter && hGutter()
  ]);
}

export { hColgroup, hGutter };
//# sourceMappingURL=h-helper.mjs.map
