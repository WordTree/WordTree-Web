import type { ComputedRef } from 'vue';
import type { ISliderInitData, ISliderProps, Stops } from './slider.type';
export declare const useStops: (props: ISliderProps, initData: ISliderInitData, minValue: ComputedRef<number>, maxValue: ComputedRef<number>) => Stops;
