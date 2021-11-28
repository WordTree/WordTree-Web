export declare const ElImageViewer: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
    readonly urlList: import("../../utils/props").BuildPropReturn<import("../../utils/props").PropWrapper<string[]>, () => [], unknown, unknown, unknown>;
    readonly zIndex: import("../../utils/props").BuildPropReturn<NumberConstructor, 2000, unknown, unknown, unknown>;
    readonly initialIndex: import("../../utils/props").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly infinite: import("../../utils/props").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly hideOnClickModal: import("../../utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
}, {
    index: import("vue").Ref<number>;
    wrapper: import("vue").Ref<HTMLDivElement | undefined>;
    img: import("vue").Ref<HTMLImageElement | undefined>;
    isSingle: import("vue").ComputedRef<boolean>;
    isFirst: import("vue").ComputedRef<boolean>;
    isLast: import("vue").ComputedRef<boolean>;
    currentImg: import("vue").ComputedRef<string>;
    imgStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
    mode: import("vue").Ref<{
        name: string;
        icon: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{}>, {}>;
    }>;
    handleActions: (action: import("./src/image-viewer.vue").ImageViewerAction, options?: {}) => void;
    prev: () => void;
    next: () => void;
    hide: () => void;
    toggleMode: () => void;
    handleImgLoad: () => void;
    handleImgError: (e: Event) => void;
    handleMouseDown: (e: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: () => boolean;
    switch: (index: number) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly urlList?: unknown;
    readonly zIndex?: unknown;
    readonly initialIndex?: unknown;
    readonly infinite?: unknown;
    readonly hideOnClickModal?: unknown;
} & {
    zIndex: number;
    infinite: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    initialIndex: number;
    urlList: string[];
    hideOnClickModal: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
} & {}> & {
    onClose?: (() => any) | undefined;
    onSwitch?: ((index: number) => any) | undefined;
}, {
    zIndex: number;
    infinite: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    initialIndex: number;
    urlList: string[];
    hideOnClickModal: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
}>> & Record<string, any>;
export default ElImageViewer;
export * from './src/image-viewer';
