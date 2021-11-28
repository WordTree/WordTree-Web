'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index = require('../../../checkbox/index.js');
require('../filter-panel.js');
var layoutObserver = require('../layout-observer.js');
var hHelper = require('../h-helper.js');
var eventHelper = require('./event-helper.js');
var style_helper = require('./style.helper.js');
var utilsHelper = require('./utils-helper.js');
var filterPanel_vue_vue_type_script_lang = require('../filter-panel.vue_vue_type_script_lang.js');

var TableHeader = vue.defineComponent({
  name: "ElTableHeader",
  components: {
    ElCheckbox: index.ElCheckbox
  },
  props: {
    fixed: {
      type: String,
      default: ""
    },
    store: {
      required: true,
      type: Object
    },
    border: Boolean,
    defaultSort: {
      type: Object,
      default: () => {
        return {
          prop: "",
          order: ""
        };
      }
    }
  },
  setup(props, { emit }) {
    const instance = vue.getCurrentInstance();
    const parent = instance.parent;
    const storeData = parent.store.states;
    const filterPanels = vue.ref({});
    const { tableLayout, onColumnsChange, onScrollableChange } = layoutObserver["default"](parent);
    const hasGutter = vue.computed(() => {
      return !props.fixed && tableLayout.gutterWidth;
    });
    vue.onMounted(() => {
      vue.nextTick(() => {
        const { prop, order } = props.defaultSort;
        const init = true;
        parent.store.commit("sort", { prop, order, init });
      });
    });
    const {
      handleHeaderClick,
      handleHeaderContextMenu,
      handleMouseDown,
      handleMouseMove,
      handleMouseOut,
      handleSortClick,
      handleFilterClick
    } = eventHelper["default"](props, emit);
    const {
      getHeaderRowStyle,
      getHeaderRowClass,
      getHeaderCellStyle,
      getHeaderCellClass
    } = style_helper["default"](props);
    const { isGroup, toggleAllSelection, columnRows } = utilsHelper["default"](props);
    instance.state = {
      onColumnsChange,
      onScrollableChange
    };
    instance.filterPanels = filterPanels;
    return {
      columns: storeData.columns,
      filterPanels,
      hasGutter,
      onColumnsChange,
      onScrollableChange,
      columnRows,
      getHeaderRowClass,
      getHeaderRowStyle,
      getHeaderCellClass,
      getHeaderCellStyle,
      handleHeaderClick,
      handleHeaderContextMenu,
      handleMouseDown,
      handleMouseMove,
      handleMouseOut,
      handleSortClick,
      handleFilterClick,
      isGroup,
      toggleAllSelection
    };
  },
  render() {
    return vue.h("table", {
      border: "0",
      cellpadding: "0",
      cellspacing: "0",
      class: "el-table__header"
    }, [
      hHelper.hColgroup(this.columns, this.hasGutter),
      vue.h("thead", {
        class: { "is-group": this.isGroup, "has-gutter": this.hasGutter }
      }, this.columnRows.map((subColumns, rowIndex) => vue.h("tr", {
        class: this.getHeaderRowClass(rowIndex),
        key: rowIndex,
        style: this.getHeaderRowStyle(rowIndex)
      }, subColumns.map((column, cellIndex) => vue.h("th", {
        class: this.getHeaderCellClass(rowIndex, cellIndex, subColumns, column),
        colspan: column.colSpan,
        key: `${column.id}-thead`,
        rowSpan: column.rowSpan,
        style: this.getHeaderCellStyle(rowIndex, cellIndex, subColumns, column),
        onClick: ($event) => this.handleHeaderClick($event, column),
        onContextmenu: ($event) => this.handleHeaderContextMenu($event, column),
        onMousedown: ($event) => this.handleMouseDown($event, column),
        onMousemove: ($event) => this.handleMouseMove($event, column),
        onMouseout: this.handleMouseOut
      }, [
        vue.h("div", {
          class: [
            "cell",
            column.filteredValue && column.filteredValue.length > 0 ? "highlight" : "",
            column.labelClassName
          ]
        }, [
          column.renderHeader ? column.renderHeader({
            column,
            $index: cellIndex,
            store: this.store,
            _self: this.$parent
          }) : column.label,
          column.sortable && vue.h("span", {
            onClick: ($event) => this.handleSortClick($event, column),
            class: "caret-wrapper"
          }, [
            vue.h("i", {
              onClick: ($event) => this.handleSortClick($event, column, "ascending"),
              class: "sort-caret ascending"
            }),
            vue.h("i", {
              onClick: ($event) => this.handleSortClick($event, column, "descending"),
              class: "sort-caret descending"
            })
          ]),
          column.filterable && vue.h(filterPanel_vue_vue_type_script_lang["default"], {
            store: this.$parent.store,
            placement: column.filterPlacement || "bottom-start",
            column,
            upDataColumn: (key, value) => {
              column[key] = value;
            }
          })
        ])
      ])))))
    ]);
  }
});

exports["default"] = TableHeader;
//# sourceMappingURL=index.js.map
