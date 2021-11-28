import type { CSSProperties, Ref, SetupContext } from 'vue';
import type { DialogEmits, DialogProps } from './dialog';
export declare const useDialog: (props: DialogProps, { emit }: SetupContext<DialogEmits>, targetRef: Ref<HTMLElement | undefined>) => {
    afterEnter: () => void;
    afterLeave: () => void;
    beforeLeave: () => void;
    handleClose: () => void;
    onModalClick: () => void;
    closed: Ref<boolean>;
    style: import("vue").ComputedRef<CSSProperties>;
    rendered: Ref<boolean>;
    visible: Ref<boolean>;
    zIndex: Ref<number>;
};
