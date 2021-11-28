import type { ExtractPropTypes } from 'vue';
export declare const emptyProps: {
    readonly image: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly imageSize: NumberConstructor;
    readonly description: {
        readonly type: StringConstructor;
        readonly default: "";
    };
};
export declare type EmptyProps = ExtractPropTypes<typeof emptyProps>;
