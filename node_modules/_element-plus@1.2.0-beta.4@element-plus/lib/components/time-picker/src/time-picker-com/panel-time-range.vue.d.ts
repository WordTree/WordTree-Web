import dayjs from 'dayjs';
import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    visible: BooleanConstructor;
    actualVisible: BooleanConstructor;
    parsedValue: {
        type: PropType<dayjs.Dayjs[]>;
    };
    format: {
        type: StringConstructor;
        default: string;
    };
}, {
    arrowControl: any;
    onSetOption: (e: any) => void;
    setMaxSelectionRange: (start: any, end: any) => void;
    setMinSelectionRange: (start: any, end: any) => void;
    btnConfirmDisabled: import("vue").ComputedRef<boolean>;
    handleCancel: () => void;
    handleConfirm: (visible?: boolean) => void;
    t: (...args: any[]) => string;
    showSeconds: import("vue").ComputedRef<boolean>;
    minDate: import("vue").ComputedRef<dayjs.Dayjs>;
    maxDate: import("vue").ComputedRef<dayjs.Dayjs>;
    amPmMode: import("vue").ComputedRef<"" | "a" | "A">;
    handleMinChange: (date: any) => void;
    handleMaxChange: (date: any) => void;
    minSelectableRange: import("vue").Ref<never[]>;
    maxSelectableRange: import("vue").Ref<never[]>;
    disabledHours_: (role: any, compare: any) => never[];
    disabledMinutes_: (hour: any, role: any, compare: any) => any;
    disabledSeconds_: (hour: any, minute: any, role: any, compare: any) => any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("pick" | "select-range" | "set-picker-option")[], "pick" | "select-range" | "set-picker-option", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    visible?: unknown;
    actualVisible?: unknown;
    parsedValue?: unknown;
    format?: unknown;
} & {
    visible: boolean;
    format: string;
    actualVisible: boolean;
} & {
    parsedValue?: dayjs.Dayjs[] | undefined;
}> & {
    onPick?: ((...args: any[]) => any) | undefined;
    "onSelect-range"?: ((...args: any[]) => any) | undefined;
    "onSet-picker-option"?: ((...args: any[]) => any) | undefined;
}, {
    visible: boolean;
    format: string;
    actualVisible: boolean;
}>;
export default _default;
