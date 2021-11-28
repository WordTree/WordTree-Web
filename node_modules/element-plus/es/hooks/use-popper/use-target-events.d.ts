export declare type TriggerType = 'click' | 'hover' | 'focus' | 'manual';
export declare type Trigger = TriggerType | TriggerType[];
export interface PopperEvents {
    onClick?: (e: Event) => void;
    onMouseenter?: (e: Event) => void;
    onMouseleave?: (e: Event) => void;
    onFocus?: (e: Event) => void;
    onBlur?: (e: Event) => void;
}
export declare const DEFAULT_TRIGGER = "hover";
declare type Handler = () => void;
export declare const useTargetEvents: (onShow: Handler, onHide: Handler, onToggle: Handler) => import("vue").ComputedRef<any>;
export {};
