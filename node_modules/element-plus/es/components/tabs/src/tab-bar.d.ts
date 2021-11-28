import type { ExtractPropTypes } from 'vue';
export declare const tabBar: {
    readonly tabs: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<{
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
};
export declare type TabBar = ExtractPropTypes<typeof tabBar>;
