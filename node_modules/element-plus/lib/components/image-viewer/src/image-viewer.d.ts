import type { ExtractPropTypes } from 'vue';
export declare const imageViewerProps: {
    readonly urlList: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<string[]>, () => [], unknown, unknown, unknown>;
    readonly zIndex: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, 2000, unknown, unknown, unknown>;
    readonly initialIndex: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly infinite: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly hideOnClickModal: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
};
export declare type ImageViewerProps = ExtractPropTypes<typeof imageViewerProps>;
export declare const imageViewerEmits: {
    close: () => boolean;
    switch: (index: number) => boolean;
};
export declare type ImageViewerEmits = typeof imageViewerEmits;
