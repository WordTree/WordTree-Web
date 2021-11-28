import { defineComponent, ref } from 'vue';
import '../../../directives/index.mjs';
import { ElOverlay } from '../../overlay/index.mjs';
import { ElIcon } from '../../icon/index.mjs';
import { CloseComponents } from '../../../utils/icon.mjs';
import '../../../hooks/index.mjs';
import { dialogProps, dialogEmits } from './dialog.mjs';
import { useDialog } from './use-dialog.mjs';
import TrapFocus from '../../../directives/trap-focus/index.mjs';
import { useSameTarget } from '../../../hooks/use-same-target/index.mjs';

var script = defineComponent({
  name: "ElDialog",
  components: {
    ElOverlay,
    ElIcon,
    ...CloseComponents
  },
  directives: {
    TrapFocus
  },
  props: dialogProps,
  emits: dialogEmits,
  setup(props, ctx) {
    const dialogRef = ref();
    const dialog = useDialog(props, ctx, dialogRef);
    const overlayEvent = useSameTarget(dialog.onModalClick);
    return {
      dialogRef,
      overlayEvent,
      ...dialog
    };
  }
});

export { script as default };
//# sourceMappingURL=dialog.vue_vue_type_script_lang.mjs.map
