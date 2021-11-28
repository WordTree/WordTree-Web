import type { ExtractPropTypes } from 'vue';
export declare const badgeProps: {
    readonly value: import("element-plus/es/utils/props").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
    readonly max: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, 99, unknown, unknown, unknown>;
    readonly isDot: BooleanConstructor;
    readonly hidden: BooleanConstructor;
    readonly type: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "danger", unknown, "primary" | "success" | "warning" | "info" | "danger", unknown>;
};
export declare type BadgeProps = ExtractPropTypes<typeof badgeProps>;
