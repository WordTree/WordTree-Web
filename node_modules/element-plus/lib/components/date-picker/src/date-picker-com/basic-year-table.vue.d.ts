import dayjs from 'dayjs';
import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    disabledDate: {
        type: PropType<(_: Date) => void>;
    };
    parsedValue: {
        type: PropType<dayjs.Dayjs>;
    };
    date: {
        type: PropType<dayjs.Dayjs>;
    };
}, {
    startYear: import("vue").ComputedRef<number>;
    getCellStyle: (year: any) => any;
    handleYearTableClick: (event: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "pick"[], "pick", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    disabledDate?: unknown;
    parsedValue?: unknown;
    date?: unknown;
} & {} & {
    date?: dayjs.Dayjs | undefined;
    disabledDate?: ((_: Date) => void) | undefined;
    parsedValue?: dayjs.Dayjs | undefined;
}> & {
    onPick?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _default;
