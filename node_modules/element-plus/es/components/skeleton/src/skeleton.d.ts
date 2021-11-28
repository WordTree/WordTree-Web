import type Skeleton from './skeleton.vue';
import type { ExtractPropTypes } from 'vue';
export declare const skeletonProps: {
    readonly animated: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly count: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, 1, unknown, unknown, unknown>;
    readonly rows: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, 3, unknown, unknown, unknown>;
    readonly loading: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly throttle: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, unknown, unknown, unknown, unknown>;
};
export declare type SkeletonProps = ExtractPropTypes<typeof skeletonProps>;
export declare type SkeletonInstance = InstanceType<typeof Skeleton>;
