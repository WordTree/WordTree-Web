import { defineComponent, inject, ref, computed, h, withCtx, renderSlot, withKeys, withModifiers } from 'vue';
import { isUndefined, getValueByPath } from '../../../utils/util.mjs';
import '../../virtual-list/index.mjs';
import './group-item.mjs';
import './option-item.mjs';
import { selectV2InjectionKey } from './token.mjs';
import { isObject } from '@vue/shared';
import FixedSizeList from '../../virtual-list/src/components/fixed-size-list.mjs';
import DynamicSizeList from '../../virtual-list/src/components/dynamic-size-list.mjs';
import script$1 from './group-item.vue_vue_type_script_lang.mjs';
import script$2 from './option-item.vue_vue_type_script_lang.mjs';

var script = defineComponent({
  name: "ElSelectDropdown",
  props: {
    data: Array,
    hoveringIndex: Number,
    width: Number
  },
  setup(props) {
    const select = inject(selectV2InjectionKey);
    const cachedHeights = ref([]);
    const listRef = ref(null);
    const isSized = computed(() => isUndefined(select.props.estimatedOptionHeight));
    const listProps = computed(() => {
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
      if (!isObject(target)) {
        return arr.includes(target);
      }
      return arr && arr.some((item) => {
        return getValueByPath(item, valueKey) === getValueByPath(target, valueKey);
      });
    };
    const isEqual = (selected, target) => {
      if (!isObject(target)) {
        return selected === target;
      } else {
        const { valueKey } = select.props;
        return getValueByPath(selected, valueKey) === getValueByPath(target, valueKey);
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
    const Comp = isSized ? FixedSizeList : DynamicSizeList;
    const {
      props: selectProps,
      onSelect,
      onHover,
      onKeyboardNavigate,
      onKeyboardSelect
    } = select;
    const { height, modelValue, multiple } = selectProps;
    if (data.length === 0) {
      return h("div", {
        class: "el-select-dropdown",
        style: {
          width: `${width}px`
        }
      }, (_a = $slots.empty) == null ? void 0 : _a.call($slots));
    }
    const ListItem = withCtx((scoped) => {
      const { index, data: data2 } = scoped;
      const item = data2[index];
      if (data2[index].type === "Group") {
        return h(script$1, {
          item,
          style: scoped.style,
          height: isSized ? listProps.itemSize : listProps.estimatedSize
        });
      }
      const selected = isItemSelected(modelValue, item);
      const itemDisabled = isItemDisabled(modelValue, selected);
      return h(script$2, {
        ...scoped,
        selected,
        disabled: item.disabled || itemDisabled,
        created: !!item.created,
        hovering: isItemHovering(index),
        item,
        onSelect,
        onHover
      }, {
        default: withCtx((props) => {
          return renderSlot($slots, "default", props, () => [
            h("span", item.label)
          ]);
        })
      });
    });
    const List = h(Comp, {
      ref: "listRef",
      className: "el-select-dropdown__list",
      data,
      height,
      width,
      total: data.length,
      scrollbarAlwaysOn: selectProps.scrollbarAlwaysOn,
      onKeydown: [
        _cache[1] || (_cache[1] = withKeys(withModifiers(() => onKeyboardNavigate("forward"), ["stop", "prevent"]), ["down"])),
        _cache[2] || (_cache[2] = withKeys(withModifiers(() => onKeyboardNavigate("backward"), ["stop", "prevent"]), ["up"])),
        _cache[3] || (_cache[3] = withKeys(withModifiers(onKeyboardSelect, ["stop", "prevent"]), ["enter"])),
        _cache[4] || (_cache[4] = withKeys(withModifiers(() => select.expanded = false, ["stop", "prevent"]), ["esc"])),
        _cache[5] || (_cache[5] = withKeys(() => select.expanded = false, ["tab"]))
      ],
      ...listProps
    }, {
      default: ListItem
    });
    return h("div", {
      class: {
        "is-multiple": multiple,
        "el-select-dropdown": true
      }
    }, [List]);
  }
});

export { script as default };
//# sourceMappingURL=select-dropdown.vue_vue_type_script_lang.mjs.map
