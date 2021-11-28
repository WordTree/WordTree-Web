declare const _default: import("vue").DefineComponent<{
    readonly currentPage: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly pageCount: {
        readonly type: NumberConstructor;
        readonly required: true;
    };
    readonly pagerCount: {
        readonly type: NumberConstructor;
        readonly default: 7;
    };
    readonly disabled: BooleanConstructor;
}, {
    showPrevMore: import("vue").Ref<boolean>;
    showNextMore: import("vue").Ref<boolean>;
    quickPrevHover: import("vue").Ref<boolean>;
    quickNextHover: import("vue").Ref<boolean>;
    pagers: import("vue").ComputedRef<number[]>;
    onMouseenter: (direction: 'left' | 'right') => void;
    onPagerClick: (event: UIEvent) => void;
    onEnter: (e: UIEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly currentPage?: unknown;
    readonly pageCount?: unknown;
    readonly pagerCount?: unknown;
    readonly disabled?: unknown;
} & {
    disabled: boolean;
    pagerCount: number;
    currentPage: number;
    pageCount: number;
} & {}> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    pagerCount: number;
    currentPage: number;
}>;
export default _default;
