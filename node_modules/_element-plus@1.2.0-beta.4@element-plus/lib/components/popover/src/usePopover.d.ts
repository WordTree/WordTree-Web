import type { SetupContext } from 'vue';
import type { IPopperOptions } from 'element-plus/es/components/popper';
export interface IUsePopover extends IPopperOptions {
    width: number | string;
}
export declare const SHOW_EVENT = "show";
export declare const HIDE_EVENT = "hide";
export default function usePopover(props: IUsePopover, ctx: SetupContext<string[]>): {
    popperStyle: import("vue").ComputedRef<{
        width: string;
        zIndex: number;
    }>;
    update: () => void;
    doDestroy: (forceDestroy?: boolean | undefined) => void;
    show: () => void;
    hide: () => void;
    onPopperMouseEnter: () => void;
    onPopperMouseLeave: () => void;
    onAfterEnter: () => void;
    onAfterLeave: () => void;
    onBeforeEnter: () => void;
    onBeforeLeave: () => void;
    initializePopper: () => void;
    isManualMode: () => boolean;
    arrowRef: import("vue").Ref<import("../../popper/src/use-popper").RefElement>;
    events: import("../../popper/src/use-popper").PopperEvents;
    popperId: string;
    popperInstance: null;
    popperRef: import("vue").Ref<import("../../popper/src/use-popper").RefElement>;
    triggerRef: import("vue").Ref<import("../../popper/src/use-popper").ElementType>;
    visibility: import("vue").WritableComputedRef<boolean>;
};
