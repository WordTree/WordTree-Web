import type { ExtractPropTypes } from 'vue';
import type { TabsPaneContext } from 'element-plus/es/tokens';
export interface Scrollable {
    next?: boolean;
    prev?: number;
}
export declare const tabNavProps: {
    readonly panes: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<{
        uid: number;
        instance: import("vue").ShallowReactive<import("vue").ComponentInternalInstance>;
        props: {
            label: string;
            name: string;
            closable: boolean;
            disabled: boolean;
            lazy: boolean;
        };
        paneName: string | undefined;
        active: boolean;
        index: string | undefined;
        isClosable: boolean;
    }[]>, () => [], unknown, unknown, unknown>;
    readonly currentName: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly editable: BooleanConstructor;
    readonly onTabClick: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<(tab: TabsPaneContext, tabName: string, ev: Event) => void>, () => void, unknown, unknown, unknown>;
    readonly onTabRemove: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<(tab: TabsPaneContext, ev: Event) => void>, () => void, unknown, unknown, unknown>;
    readonly type: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "", unknown, "" | "card" | "border-card", unknown>;
    readonly stretch: BooleanConstructor;
};
export declare type TabNavProps = ExtractPropTypes<typeof tabNavProps>;
declare const _default: import("vue").DefineComponent<{
    readonly panes: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<{
        uid: number;
        instance: import("vue").ShallowReactive<import("vue").ComponentInternalInstance>;
        props: {
            label: string;
            name: string;
            closable: boolean;
            disabled: boolean;
            lazy: boolean;
        };
        paneName: string | undefined;
        active: boolean;
        index: string | undefined;
        isClosable: boolean;
    }[]>, () => [], unknown, unknown, unknown>;
    readonly currentName: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly editable: BooleanConstructor;
    readonly onTabClick: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<(tab: {
        uid: number;
        instance: import("vue").ShallowReactive<import("vue").ComponentInternalInstance>;
        props: {
            label: string;
            name: string;
            closable: boolean;
            disabled: boolean;
            lazy: boolean;
        };
        paneName: string | undefined;
        active: boolean;
        index: string | undefined;
        isClosable: boolean;
    }, tabName: string, ev: Event) => void>, () => void, unknown, unknown, unknown>;
    readonly onTabRemove: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<(tab: {
        uid: number;
        instance: import("vue").ShallowReactive<import("vue").ComponentInternalInstance>;
        props: {
            label: string;
            name: string;
            closable: boolean;
            disabled: boolean;
            lazy: boolean;
        };
        paneName: string | undefined;
        active: boolean;
        index: string | undefined;
        isClosable: boolean;
    }, ev: Event) => void>, () => void, unknown, unknown, unknown>;
    readonly type: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "", unknown, "" | "card" | "border-card", unknown>;
    readonly stretch: BooleanConstructor;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly panes?: unknown;
    readonly currentName?: unknown;
    readonly editable?: unknown;
    readonly onTabClick?: unknown;
    readonly onTabRemove?: unknown;
    readonly type?: unknown;
    readonly stretch?: unknown;
} & {
    type: import("element-plus/es/utils/props").BuildPropType<StringConstructor, "" | "card" | "border-card", unknown>;
    editable: boolean;
    stretch: boolean;
    panes: {
        uid: number;
        instance: import("vue").ShallowReactive<import("vue").ComponentInternalInstance>;
        props: {
            label: string;
            name: string;
            closable: boolean;
            disabled: boolean;
            lazy: boolean;
        };
        paneName: string | undefined;
        active: boolean;
        index: string | undefined;
        isClosable: boolean;
    }[];
    currentName: string;
    onTabClick: (tab: {
        uid: number;
        instance: import("vue").ShallowReactive<import("vue").ComponentInternalInstance>;
        props: {
            label: string;
            name: string;
            closable: boolean;
            disabled: boolean;
            lazy: boolean;
        };
        paneName: string | undefined;
        active: boolean;
        index: string | undefined;
        isClosable: boolean;
    }, tabName: string, ev: Event) => void;
    onTabRemove: (tab: {
        uid: number;
        instance: import("vue").ShallowReactive<import("vue").ComponentInternalInstance>;
        props: {
            label: string;
            name: string;
            closable: boolean;
            disabled: boolean;
            lazy: boolean;
        };
        paneName: string | undefined;
        active: boolean;
        index: string | undefined;
        isClosable: boolean;
    }, ev: Event) => void;
} & {}>, {
    type: import("element-plus/es/utils/props").BuildPropType<StringConstructor, "" | "card" | "border-card", unknown>;
    editable: boolean;
    stretch: boolean;
    panes: {
        uid: number;
        instance: import("vue").ShallowReactive<import("vue").ComponentInternalInstance>;
        props: {
            label: string;
            name: string;
            closable: boolean;
            disabled: boolean;
            lazy: boolean;
        };
        paneName: string | undefined;
        active: boolean;
        index: string | undefined;
        isClosable: boolean;
    }[];
    currentName: string;
    onTabClick: (tab: {
        uid: number;
        instance: import("vue").ShallowReactive<import("vue").ComponentInternalInstance>;
        props: {
            label: string;
            name: string;
            closable: boolean;
            disabled: boolean;
            lazy: boolean;
        };
        paneName: string | undefined;
        active: boolean;
        index: string | undefined;
        isClosable: boolean;
    }, tabName: string, ev: Event) => void;
    onTabRemove: (tab: {
        uid: number;
        instance: import("vue").ShallowReactive<import("vue").ComponentInternalInstance>;
        props: {
            label: string;
            name: string;
            closable: boolean;
            disabled: boolean;
            lazy: boolean;
        };
        paneName: string | undefined;
        active: boolean;
        index: string | undefined;
        isClosable: boolean;
    }, ev: Event) => void;
}>;
export default _default;
