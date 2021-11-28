import type { TabsProps, TabPaneProps } from 'element-plus/es/components/tabs';
import type { ComponentInternalInstance, ComputedRef, Ref, InjectionKey, UnwrapRef, ShallowReactive } from 'vue';
export declare type TabsPaneContext = UnwrapRef<{
    uid: number;
    instance: ShallowReactive<ComponentInternalInstance>;
    props: TabPaneProps;
    paneName: ComputedRef<string | undefined>;
    active: ComputedRef<boolean>;
    index: Ref<string | undefined>;
    isClosable: ComputedRef<boolean>;
}>;
export interface TabsRootContext {
    props: TabsProps;
    currentName: Ref<string>;
    updatePaneState: (pane: TabsPaneContext) => void;
}
export declare const tabsRootContextKey: InjectionKey<TabsRootContext>;
