import type { CSSProperties } from 'vue';
declare const _default: import("vue").DefineComponent<{
    readonly tabs: import("../../../utils/props").BuildPropReturn<import("../../../utils/props").PropWrapper<{
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
}, {
    bar$: import("vue").Ref<HTMLDivElement | undefined>;
    rootTabs: import("element-plus/es/tokens").TabsRootContext;
    barStyle: import("vue").Ref<any>;
    update: () => CSSProperties;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly tabs?: unknown;
} & {
    tabs: {
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
} & {}>, {
    tabs: {
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
}>;
export default _default;
