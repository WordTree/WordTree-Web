import type { ExtractPropTypes } from 'vue';
import type { RouteLocationRaw } from 'vue-router';
export declare const breadcrumbItemProps: {
    readonly to: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<RouteLocationRaw>, "", unknown, unknown, unknown>;
    readonly replace: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
};
export declare type BreadcrumbItemProps = ExtractPropTypes<typeof breadcrumbItemProps>;
