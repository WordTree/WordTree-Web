import { Effect } from 'element-plus/es/components/popper';
import type { MenuItemRegistered, MenuProvider } from './types';
declare const _default: import("vue").DefineComponent<{
    readonly index: import("../../../utils/props").BuildPropReturn<import("../../../utils/props").PropWrapper<string | null>, null, unknown, unknown, unknown>;
    readonly route: import("../../../utils/props").BuildPropReturn<import("../../../utils/props").PropWrapper<import("vue-router").RouteLocationRaw>, unknown, unknown, unknown, unknown>;
    readonly disabled: BooleanConstructor;
}, {
    Effect: typeof Effect;
    parentMenu: import("vue").ComputedRef<import("vue").ComponentInternalInstance>;
    rootMenu: MenuProvider;
    paddingStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
    active: import("vue").ComputedRef<boolean>;
    handleClick: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (item: MenuItemRegistered) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly index?: unknown;
    readonly route?: unknown;
    readonly disabled?: unknown;
} & {
    disabled: boolean;
    index: import("../../../utils/props").BuildPropType<import("../../../utils/props").PropWrapper<string | null>, unknown, unknown>;
} & {
    route?: import("../../../utils/props").BuildPropType<import("../../../utils/props").PropWrapper<import("vue-router").RouteLocationRaw>, unknown, unknown> | undefined;
}> & {
    onClick?: ((item: MenuItemRegistered) => any) | undefined;
}, {
    disabled: boolean;
    index: import("../../../utils/props").BuildPropType<import("../../../utils/props").PropWrapper<string | null>, unknown, unknown>;
    route: import("../../../utils/props").BuildPropType<import("../../../utils/props").PropWrapper<import("vue-router").RouteLocationRaw>, unknown, unknown>;
}>;
export default _default;
