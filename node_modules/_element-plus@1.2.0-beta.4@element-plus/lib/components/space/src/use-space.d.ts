import type { SpaceProps } from './space';
import type { StyleValue } from 'vue';
export declare function useSpace(props: SpaceProps): {
    classes: import("vue").ComputedRef<import("../../../utils/props").BuildPropType<import("../../../utils/props").PropWrapper<string | string[] | Record<string, boolean>>, unknown, unknown>[]>;
    containerStyle: import("vue").ComputedRef<StyleValue>;
    itemStyle: import("vue").ComputedRef<StyleValue>;
};
