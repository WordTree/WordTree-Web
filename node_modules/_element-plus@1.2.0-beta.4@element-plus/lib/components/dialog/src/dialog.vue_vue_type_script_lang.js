'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../directives/index.js');
var index = require('../../overlay/index.js');
var index$1 = require('../../icon/index.js');
var icon = require('../../../utils/icon.js');
require('../../../hooks/index.js');
var dialog = require('./dialog.js');
var useDialog = require('./use-dialog.js');
var index$2 = require('../../../directives/trap-focus/index.js');
var index$3 = require('../../../hooks/use-same-target/index.js');

var script = vue.defineComponent({
  name: "ElDialog",
  components: {
    ElOverlay: index.ElOverlay,
    ElIcon: index$1.ElIcon,
    ...icon.CloseComponents
  },
  directives: {
    TrapFocus: index$2["default"]
  },
  props: dialog.dialogProps,
  emits: dialog.dialogEmits,
  setup(props, ctx) {
    const dialogRef = vue.ref();
    const dialog = useDialog.useDialog(props, ctx, dialogRef);
    const overlayEvent = index$3.useSameTarget(dialog.onModalClick);
    return {
      dialogRef,
      overlayEvent,
      ...dialog
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=dialog.vue_vue_type_script_lang.js.map
