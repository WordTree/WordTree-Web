import type { VNode } from 'vue';
import type { Table } from '../table/defaults';
declare const _default: import("vue").DefineComponent<{
    store: {
        required: boolean;
        type: import("vue").PropType<any>;
    };
    stripe: BooleanConstructor;
    tooltipEffect: StringConstructor;
    context: {
        default: () => {};
        type: import("vue").PropType<Table<any>>;
    };
    rowClassName: import("vue").PropType<import("../table/defaults").ColumnCls<any>>;
    rowStyle: import("vue").PropType<import("../table/defaults").ColumnStyle<any>>;
    fixed: {
        type: StringConstructor;
        default: string;
    };
    highlight: BooleanConstructor;
}, {
    onColumnsChange: (layout: import("../table-layout").default<any>) => void;
    onScrollableChange: (layout: import("../table-layout").default<any>) => void;
    wrappedRowRender: (row: any, $index: number) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[] | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[][];
    tooltipContent: import("vue").Ref<string>;
    tooltipTrigger: import("vue").Ref<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    store?: unknown;
    stripe?: unknown;
    tooltipEffect?: unknown;
    context?: unknown;
    rowClassName?: unknown;
    rowStyle?: unknown;
    fixed?: unknown;
    highlight?: unknown;
} & {
    fixed: string;
    highlight: boolean;
    context: Table<any>;
    stripe: boolean;
} & {
    store?: unknown;
    rowClassName?: import("../table/defaults").ColumnCls<any> | undefined;
    rowStyle?: import("../table/defaults").ColumnStyle<any> | undefined;
    tooltipEffect?: string | undefined;
}>, {
    fixed: string;
    highlight: boolean;
    context: Table<any>;
    stripe: boolean;
}>;
export default _default;
