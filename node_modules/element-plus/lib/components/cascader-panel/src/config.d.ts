import { ExpandTrigger } from './node';
import type { PropType } from 'vue';
import type { CascaderValue, CascaderOption, CascaderConfig, CascaderProps } from './node';
export declare const CommonProps: {
    modelValue: PropType<CascaderValue>;
    options: {
        type: PropType<CascaderOption[]>;
        default: () => CascaderOption[];
    };
    props: {
        type: PropType<CascaderProps>;
        default: () => CascaderProps;
    };
};
export declare const DefaultProps: CascaderConfig;
export declare const useCascaderConfig: (props: {
    props: CascaderProps;
}) => import("vue").ComputedRef<{
    expandTrigger: ExpandTrigger;
    multiple: boolean;
    checkStrictly: boolean;
    emitPath: boolean;
    lazy: boolean;
    lazyLoad: import("./node").LazyLoad;
    value: string;
    label: string;
    children: string;
    disabled: string | import("./node").isDisabled;
    leaf: string | import("./node").isLeaf;
    hoverThreshold: number;
}>;
