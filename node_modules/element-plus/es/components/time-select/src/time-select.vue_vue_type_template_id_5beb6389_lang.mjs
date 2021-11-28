import { resolveComponent, openBlock, createBlock, withCtx, resolveDynamicComponent, createCommentVNode, createElementBlock, Fragment, renderList } from 'vue';

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_option = resolveComponent("el-option");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_select = resolveComponent("el-select");
  return openBlock(), createBlock(_component_el_select, {
    ref: "select",
    "model-value": _ctx.value,
    disabled: _ctx.disabled,
    clearable: _ctx.clearable,
    "clear-icon": _ctx.clearIcon,
    size: _ctx.size,
    placeholder: _ctx.placeholder,
    "default-first-option": "",
    filterable: _ctx.editable,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = (event) => _ctx.$emit("update:modelValue", event)),
    onChange: _cache[1] || (_cache[1] = (event) => _ctx.$emit("change", event)),
    onBlur: _cache[2] || (_cache[2] = (event) => _ctx.$emit("blur", event)),
    onFocus: _cache[3] || (_cache[3] = (event) => _ctx.$emit("focus", event))
  }, {
    prefix: withCtx(() => [
      _ctx.prefixIcon ? (openBlock(), createBlock(_component_el_icon, {
        key: 0,
        class: "el-input__prefix-icon"
      }, {
        default: withCtx(() => [
          (openBlock(), createBlock(resolveDynamicComponent(_ctx.prefixIcon)))
        ]),
        _: 1
      })) : createCommentVNode("v-if", true)
    ]),
    default: withCtx(() => [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items, (item) => {
        return openBlock(), createBlock(_component_el_option, {
          key: item.value,
          label: item.value,
          value: item.value,
          disabled: item.disabled
        }, null, 8, ["label", "value", "disabled"]);
      }), 128))
    ]),
    _: 1
  }, 8, ["model-value", "disabled", "clearable", "clear-icon", "size", "placeholder", "filterable"]);
}

export { render };
//# sourceMappingURL=time-select.vue_vue_type_template_id_5beb6389_lang.mjs.map
