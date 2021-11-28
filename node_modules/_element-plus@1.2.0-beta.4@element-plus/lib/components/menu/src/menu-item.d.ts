import type { ExtractPropTypes } from 'vue';
import type { RouteLocationRaw } from 'vue-router';
import type { MenuItemRegistered } from './types';
export declare const menuItemProps: {
    readonly index: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<string | null>, null, unknown, unknown, unknown>;
    readonly route: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<RouteLocationRaw>, unknown, unknown, unknown, unknown>;
    readonly disabled: BooleanConstructor;
};
export declare type MenuItemProps = ExtractPropTypes<typeof menuItemProps>;
export declare const menuItemEmits: {
    click: (item: MenuItemRegistered) => boolean;
};
export declare type MenuItemEmits = typeof menuItemEmits;
