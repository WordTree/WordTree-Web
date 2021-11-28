import { h, Comment } from 'vue';

function renderArrow(showArrow) {
  return showArrow ? h("div", {
    ref: "arrowRef",
    class: "el-popper__arrow",
    "data-popper-arrow": ""
  }, null) : h(Comment, null, "");
}

export { renderArrow as default };
//# sourceMappingURL=arrow.mjs.map
