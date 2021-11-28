'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var throttle = require('lodash/throttle');
var resizeEvent = require('../../../../utils/resize-event.js');
var util = require('../../../../utils/util.js');
var dom = require('../../../../utils/dom.js');
var util$1 = require('../util.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var throttle__default = /*#__PURE__*/_interopDefaultLegacy(throttle);

function useStyle(props, layout, store, table) {
  const $ELEMENT = util.useGlobalConfig();
  const isHidden = vue.ref(false);
  const renderExpanded = vue.ref(null);
  const resizeProxyVisible = vue.ref(false);
  const setDragVisible = (visible) => {
    resizeProxyVisible.value = visible;
  };
  const resizeState = vue.ref({
    width: null,
    height: null
  });
  const isGroup = vue.ref(false);
  vue.watchEffect(() => {
    layout.setHeight(props.height);
  });
  vue.watchEffect(() => {
    layout.setMaxHeight(props.maxHeight);
  });
  vue.watch(() => [props.currentRowKey, store.states.rowKey], ([currentRowKey, rowKey]) => {
    if (!vue.unref(rowKey))
      return;
    store.setCurrentRowKey(`${currentRowKey}`);
  }, {
    immediate: true
  });
  vue.watch(() => props.data, (data) => {
    table.store.commit("setData", data);
  }, {
    immediate: true,
    deep: true
  });
  vue.watchEffect(() => {
    if (props.expandRowKeys) {
      store.setExpandRowKeysAdapter(props.expandRowKeys);
    }
  });
  const handleMouseLeave = () => {
    table.store.commit("setHoverRow", null);
    if (table.hoverState)
      table.hoverState = null;
  };
  const handleHeaderFooterMousewheel = (event, data) => {
    const { pixelX, pixelY } = data;
    if (Math.abs(pixelX) >= Math.abs(pixelY)) {
      table.refs.bodyWrapper.scrollLeft += data.pixelX / 5;
    }
  };
  const shouldUpdateHeight = vue.computed(() => {
    return props.height || props.maxHeight || store.states.fixedColumns.value.length > 0 || store.states.rightFixedColumns.value.length > 0;
  });
  const doLayout = () => {
    if (shouldUpdateHeight.value) {
      layout.updateElsHeight();
    }
    layout.updateColumnsWidth();
    requestAnimationFrame(syncPostion);
  };
  vue.onMounted(async () => {
    setScrollClass("is-scrolling-left");
    store.updateColumns();
    await vue.nextTick();
    bindEvents();
    requestAnimationFrame(doLayout);
    resizeState.value = {
      width: table.vnode.el.offsetWidth,
      height: table.vnode.el.offsetHeight
    };
    store.states.columns.value.forEach((column) => {
      if (column.filteredValue && column.filteredValue.length) {
        table.store.commit("filterChange", {
          column,
          values: column.filteredValue,
          silent: true
        });
      }
    });
    table.$ready = true;
  });
  const setScrollClassByEl = (el, className) => {
    if (!el)
      return;
    const classList = Array.from(el.classList).filter((item) => !item.startsWith("is-scrolling-"));
    classList.push(layout.scrollX.value ? className : "is-scrolling-none");
    el.className = classList.join(" ");
  };
  const setScrollClass = (className) => {
    const { bodyWrapper } = table.refs;
    setScrollClassByEl(bodyWrapper, className);
  };
  const syncPostion = throttle__default["default"](function() {
    if (!table.refs.bodyWrapper)
      return;
    const { scrollLeft, scrollTop, offsetWidth, scrollWidth } = table.refs.bodyWrapper;
    const {
      headerWrapper,
      footerWrapper,
      fixedBodyWrapper,
      rightFixedBodyWrapper
    } = table.refs;
    if (headerWrapper)
      headerWrapper.scrollLeft = scrollLeft;
    if (footerWrapper)
      footerWrapper.scrollLeft = scrollLeft;
    if (fixedBodyWrapper)
      fixedBodyWrapper.scrollTop = scrollTop;
    if (rightFixedBodyWrapper)
      rightFixedBodyWrapper.scrollTop = scrollTop;
    const maxScrollLeftPosition = scrollWidth - offsetWidth - 1;
    if (scrollLeft >= maxScrollLeftPosition) {
      setScrollClass("is-scrolling-right");
    } else if (scrollLeft === 0) {
      setScrollClass("is-scrolling-left");
    } else {
      setScrollClass("is-scrolling-middle");
    }
  }, 10);
  const bindEvents = () => {
    table.refs.bodyWrapper.addEventListener("scroll", syncPostion, {
      passive: true
    });
    if (props.fit) {
      resizeEvent.addResizeListener(table.vnode.el, resizeListener);
    } else {
      dom.on(window, "resize", doLayout);
    }
  };
  vue.onUnmounted(() => {
    unbindEvents();
  });
  const unbindEvents = () => {
    var _a;
    (_a = table.refs.bodyWrapper) == null ? void 0 : _a.removeEventListener("scroll", syncPostion, true);
    if (props.fit) {
      resizeEvent.removeResizeListener(table.vnode.el, resizeListener);
    } else {
      dom.off(window, "resize", doLayout);
    }
  };
  const resizeListener = () => {
    if (!table.$ready)
      return;
    let shouldUpdateLayout = false;
    const el = table.vnode.el;
    const { width: oldWidth, height: oldHeight } = resizeState.value;
    const width = el.offsetWidth;
    if (oldWidth !== width) {
      shouldUpdateLayout = true;
    }
    const height = el.offsetHeight;
    if ((props.height || shouldUpdateHeight.value) && oldHeight !== height) {
      shouldUpdateLayout = true;
    }
    if (shouldUpdateLayout) {
      resizeState.value = {
        width,
        height
      };
      doLayout();
    }
  };
  const tableSize = vue.computed(() => {
    return props.size || $ELEMENT.size;
  });
  const bodyWidth = vue.computed(() => {
    const { bodyWidth: bodyWidth_, scrollY, gutterWidth } = layout;
    return bodyWidth_.value ? `${bodyWidth_.value - (scrollY.value ? gutterWidth : 0)}px` : "";
  });
  const bodyHeight = vue.computed(() => {
    const headerHeight = layout.headerHeight.value || 0;
    const bodyHeight2 = layout.bodyHeight.value;
    const footerHeight = layout.footerHeight.value || 0;
    if (props.height) {
      return {
        height: bodyHeight2 ? `${bodyHeight2}px` : ""
      };
    } else if (props.maxHeight) {
      const maxHeight = util$1.parseHeight(props.maxHeight);
      if (typeof maxHeight === "number") {
        return {
          "max-height": `${maxHeight - footerHeight - (props.showHeader ? headerHeight : 0)}px`
        };
      }
    }
    return {};
  });
  const emptyBlockStyle = vue.computed(() => {
    if (props.data && props.data.length)
      return null;
    let height = "100%";
    if (layout.appendHeight.value) {
      height = `calc(100% - ${layout.appendHeight.value}px)`;
    }
    return {
      width: bodyWidth.value,
      height
    };
  });
  const handleFixedMousewheel = (event, data) => {
    const bodyWrapper = table.refs.bodyWrapper;
    if (Math.abs(data.spinY) > 0) {
      const currentScrollTop = bodyWrapper.scrollTop;
      if (data.pixelY < 0 && currentScrollTop !== 0) {
        event.preventDefault();
      }
      if (data.pixelY > 0 && bodyWrapper.scrollHeight - bodyWrapper.clientHeight > currentScrollTop) {
        event.preventDefault();
      }
      bodyWrapper.scrollTop += Math.ceil(data.pixelY / 5);
    } else {
      bodyWrapper.scrollLeft += Math.ceil(data.pixelX / 5);
    }
  };
  const fixedHeight = vue.computed(() => {
    if (props.maxHeight) {
      if (props.showSummary) {
        return {
          bottom: 0
        };
      }
      return {
        bottom: layout.scrollX.value && props.data.length ? `${layout.gutterWidth}px` : ""
      };
    } else {
      if (props.showSummary) {
        return {
          height: layout.tableHeight.value ? `${layout.tableHeight.value}px` : ""
        };
      }
      return {
        height: layout.viewportHeight.value ? `${layout.viewportHeight.value}px` : ""
      };
    }
  });
  const fixedBodyHeight = vue.computed(() => {
    if (props.height) {
      return {
        height: layout.fixedBodyHeight.value ? `${layout.fixedBodyHeight.value}px` : ""
      };
    } else if (props.maxHeight) {
      let maxHeight = util$1.parseHeight(props.maxHeight);
      if (typeof maxHeight === "number") {
        maxHeight = layout.scrollX.value ? maxHeight - layout.gutterWidth : maxHeight;
        if (props.showHeader) {
          maxHeight -= layout.headerHeight.value;
        }
        maxHeight -= layout.footerHeight.value;
        return {
          "max-height": `${maxHeight}px`
        };
      }
    }
    return {};
  });
  return {
    isHidden,
    renderExpanded,
    setDragVisible,
    isGroup,
    handleMouseLeave,
    handleHeaderFooterMousewheel,
    tableSize,
    bodyHeight,
    emptyBlockStyle,
    handleFixedMousewheel,
    fixedHeight,
    fixedBodyHeight,
    resizeProxyVisible,
    bodyWidth,
    resizeState,
    doLayout
  };
}

exports["default"] = useStyle;
//# sourceMappingURL=style-helper.js.map
