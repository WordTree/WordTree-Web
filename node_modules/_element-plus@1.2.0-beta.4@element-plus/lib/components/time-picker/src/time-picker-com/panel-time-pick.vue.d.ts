import dayjs from 'dayjs';
import type { PropType } from 'vue';
import type { Dayjs } from 'dayjs';
declare const _default: import("vue").DefineComponent<{
    visible: BooleanConstructor;
    actualVisible: {
        type: BooleanConstructor;
        default: undefined;
    };
    datetimeRole: {
        type: StringConstructor;
    };
    parsedValue: {
        type: PropType<string | dayjs.Dayjs>;
    };
    format: {
        type: StringConstructor;
        default: string;
    };
}, {
    transitionName: import("vue").ComputedRef<"" | "el-zoom-in-top">;
    arrowControl: any;
    onSetOption: (e: any) => void;
    t: (...args: any[]) => string;
    handleConfirm: (visible?: boolean, first?: boolean) => void;
    handleChange: (_date: Dayjs) => void;
    setSelectionRange: (start: any, end: any) => void;
    amPmMode: import("vue").ComputedRef<"" | "a" | "A">;
    showSeconds: import("vue").ComputedRef<boolean>;
    handleCancel: () => void;
    disabledHours: any;
    disabledMinutes: any;
    disabledSeconds: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("pick" | "select-range" | "set-picker-option")[], "pick" | "select-range" | "set-picker-option", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    visible?: unknown;
    actualVisible?: unknown;
    datetimeRole?: unknown;
    parsedValue?: unknown;
    format?: unknown;
} & {
    visible: boolean;
    format: string;
} & {
    parsedValue?: string | dayjs.Dayjs | undefined;
    actualVisible?: boolean | undefined;
    datetimeRole?: string | undefined;
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
