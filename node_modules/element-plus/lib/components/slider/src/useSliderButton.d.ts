import type { ComputedRef, CSSProperties } from 'vue';
import type { ISliderButtonInitData, ISliderButtonProps } from './slider.type';
export declare const useSliderButton: (props: ISliderButtonProps, initData: ISliderButtonInitData, emit: any) => {
    tooltip: import("vue").Ref<null>;
    tooltipVisible: import("vue").Ref<boolean>;
    showTooltip: any;
    wrapperStyle: ComputedRef<CSSProperties>;
    formatValue: ComputedRef<string | number>;
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
    onButtonDown: (event: MouseEvent | TouchEvent) => void;
    onLeftKeyDown: () => void;
    onRightKeyDown: () => void;
    setPosition: (newPosition: number) => Promise<void>;
};
