import type { PropType, Ref } from 'vue';
import type { Dayjs } from 'dayjs';
import type { Nullable } from 'element-plus/es/utils/types';
declare const _default: import("vue").DefineComponent<{
    role: {
        type: StringConstructor;
        required: true;
    };
    spinnerDate: {
        type: PropType<Dayjs>;
        required: true;
    };
    showSeconds: {
        type: BooleanConstructor;
        default: boolean;
    };
    arrowControl: BooleanConstructor;
    amPmMode: {
        type: StringConstructor;
        default: string;
    };
    disabledHours: {
        type: FunctionConstructor;
    };
    disabledMinutes: {
        type: FunctionConstructor;
    };
    disabledSeconds: {
        type: FunctionConstructor;
    };
}, {
    getRefId: (item: any) => string;
    spinnerItems: import("vue").ComputedRef<string[]>;
    currentScrollbar: Ref<null>;
    hours: import("vue").ComputedRef<number>;
    minutes: import("vue").ComputedRef<number>;
    seconds: import("vue").ComputedRef<number>;
    hoursList: import("vue").ComputedRef<never[]>;
    minutesList: import("vue").ComputedRef<never[]>;
    arrowHourList: import("vue").ComputedRef<(number | undefined)[]>;
    arrowMinuteList: import("vue").ComputedRef<(number | undefined)[]>;
    arrowSecondList: import("vue").ComputedRef<(number | undefined)[]>;
    getAmPmFlag: (hour: any) => string;
    emitSelectRange: (type: any) => void;
    adjustCurrentSpinner: (type: any) => void;
    typeItemHeight: (type: any) => any;
    listHoursRef: Ref<Nullable<HTMLElement>>;
    listMinutesRef: Ref<Nullable<HTMLElement>>;
    listSecondsRef: Ref<Nullable<HTMLElement>>;
    onIncreaseClick: () => void;
    onDecreaseClick: () => void;
    handleClick: (type: any, { value, disabled }: {
        value: any;
        disabled: any;
    }) => void;
    secondsList: import("vue").ComputedRef<never[]>;
    timePartsMap: import("vue").ComputedRef<{
        hours: import("vue").ComputedRef<number>;
        minutes: import("vue").ComputedRef<number>;
        seconds: import("vue").ComputedRef<number>;
    }>;
    arrowListMap: import("vue").ComputedRef<{
        hours: import("vue").ComputedRef<(number | undefined)[]>;
        minutes: import("vue").ComputedRef<(number | undefined)[]>;
        seconds: import("vue").ComputedRef<(number | undefined)[]>;
    }>;
    listMap: import("vue").ComputedRef<{
        hours: import("vue").ComputedRef<never[]>;
        minutes: import("vue").ComputedRef<never[]>;
        seconds: import("vue").ComputedRef<never[]>;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "select-range" | "set-option")[], "change" | "select-range" | "set-option", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    role?: unknown;
    spinnerDate?: unknown;
    showSeconds?: unknown;
    arrowControl?: unknown;
    amPmMode?: unknown;
    disabledHours?: unknown;
    disabledMinutes?: unknown;
    disabledSeconds?: unknown;
} & {
    arrowControl: boolean;
    role: string;
    spinnerDate: Dayjs;
    showSeconds: boolean;
    amPmMode: string;
} & {
    disabledHours?: Function | undefined;
    disabledMinutes?: Function | undefined;
    disabledSeconds?: Function | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onSelect-range"?: ((...args: any[]) => any) | undefined;
    "onSet-option"?: ((...args: any[]) => any) | undefined;
}, {
    arrowControl: boolean;
    showSeconds: boolean;
    amPmMode: string;
}>;
export default _default;
