'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var util = require('../../../utils/util.js');
require('../../virtual-list/index.js');
require('./group-item.js');
require('./option-item.js');
var token = require('./token.js');
var shared = require('@vue/shared');
var fixedSizeList = require('../../virtual-list/src/components/fixed-size-list.js');
var dynamicSizeList = require('../../virtual-list/src/components/dynamic-size-list.js');
var groupItem_vue_vue_type_script_lang = require('./group-item.vue_vue_type_script_lang.js');
var optionItem_vue_vue_type_script_lang = require('./option-item.vue_vue_type_script_lang.js');

var script = vue.defineComponent({
  name: "ElSelectDropdown",
  props: {
    data: Array,
    hoveringIndex: Number,
    width: Number
  },
  setup(props) {
    const select = vue.inject(token.selectV2InjectionKey);
    const cachedHeights = vue.ref([]);
    const listRef = vue.ref(null);
    const isSized = vue.computed(() => util.isUndefined(select.props.estimatedOptionHeight));
    const listProps = vue.computed(() => {
      if (isSized.value) {
        return {
          itemSize: select.props.itemHeight
        };
      }
      return {
        estimatedSize: select.props.estimatedOptionHeight,
        itemSize: (idx) => cachedHeights.value[idx]
      };
    });
    const contains = (arr = [], target) => {
      const {
        props: { valueKey }
      } = select;
      if (!shared.isObject(target)) {
        return arr.includes(target);
      }
      return arr && arr.some((item) => {
        return util.getValueByPath(item, valueKey) === util.getValueByPath(target, valueKey);
      });
    };
    const isEqual = (selected, target) => {
      if (!shared.isObject(target)) {
        return selected === target;
      } else {
        const { valueKey } = select.props;
        return util.getValueByPath(selected, valueKey) === util.getValueByPath(target, valueKey);
      }
    };
    const isItemSelected = (modelValue, target) => {
      if (select.props.multiple) {
        return contains(modelValue, target.value);
      }
      return isEqual(modelValue, target.value);
    };
    const isItemDisabled = (modelValue, selected) => {
      const { disabled, multiple, multipleLimit } = select.props;
      return disabled || !selected && (multiple ? multipleLimit > 0 && modelValue.length >= multipleLimit : false);
    };
    const isItemHovering = (target) => props.hoveringIndex === target;
    const scrollToItem = (index) => {
      const list = listRef.value;
      if (list) {
        list.scrollToItem(index);
      }
    };
    const resetScrollTop = () => {
      const list = listRef.value;
      if (list) {
        list.resetScrollTop();
      }
    };
    return {
      select,
      listProps,
      listRef,
      isSized,
      isItemDisabled,
      isItemHovering,
      isItemSelected,
      scrollToItem,
      resetScrollTop
    };
  },
  render(_ctx, _cache) {
    var _a;
    const {
      $slots,
      data,
      listProps,
      select,
      isSized,
      width,
      isItemDisabled,
      isItemHovering,
      isItemSelected
    } = _ctx;
    const Comp = isSized ? fixedSizeList["default"] : dynamicSizeList["default"];
    const {
      props: selectProps,
      onSelect,
      onHover,
      onKeyboardNavigate,
      onKeyboardSelect
    } = select;
    const { height, modelValue, multiple } = selectProps;
    if (data.length === 0) {
      return vue.h("div", {
        class: "el-select-dropdown",
        style: {
          width: `${width}px`
        }
      }, (_a = $slots.empty) == null ? void 0 : _a.call($slots));
    }
    const ListItem = vue.withCtx((scoped) => {
      const { index, data: data2 } = scoped;
      const item = data2[index];
      if (data2[index].type === "Group") {
        return vue.h(groupItem_vue_vue_type_script_lang["default"], {
          item,
          style: scoped.style,
          height: isSized ? listProps.itemSize : listProps.estimatedSize
        });
      }
      const selected = isItemSelected(modelValue, item);
      const itemDisabled = isItemDisabled(modelValue, selected);
      return vue.h(optionItem_vue_vue_type_script_lang["default"], {
        ...scoped,
        selected,
        disabled: item.disabled || itemDisabled,
        created: !!item.created,
        hovering: isItemHovering(index),
        item,
        onSelect,
        onHover
      }, {
        default: vue.withCtx((props) => {
          return vue.renderSlot($slots, "default", props, () => [
            vue.h("span", item.label)
          ]);
        })
      });
    });
    const List = vue.h(Comp, {
      ref: "listRef",
      className: "el-select-dropdown__list",
      data,
      height,
      width,
      total: data.length,
      scrollbarAlwaysOn: selectProps.scrollbarAlwaysOn,
      onKeydown: [
        _cache[1] || (_cache[1] = vue.withKeys(vue.withModifiers(() => onKeyboardNavigate("forward"), ["stop", "prevent"]), ["down"])),
        _cache[2] || (_cache[2] = vue.withKeys(vue.withModifiers(() => onKeyboardNavigate("backward"), ["stop", "prevent"]), ["up"])),
        _cache[3] || (_cache[3] = vue.withKeys(vue.withModifiers(onKeyboardSelect, ["stop", "prevent"]), ["enter"])),
        _cache[4] || (_cache[4] = vue.withKeys(vue.withModifiers(() => select.expanded = false, ["stop", "prevent"]), ["esc"])),
        _cache[5] || (_cache[5] = vue.withKeys(() => select.expanded = false, ["tab"]))
      ],
      ...listProps
    }, {
      default: ListItem
    });
    return vue.h("div", {
      class: {
        "is-multiple": multiple,
        "el-select-dropdown": true
      }
    }, [List]);
  }
});

exports["default"] = script;
//# sourceMappingURL=select-dropdown.vue_vue_type_script_lang.js.map
