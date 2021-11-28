import type { PropType } from 'vue';
import type { Options } from '@popperjs/core';
export declare const DEFAULT_FALLBACK_PLACEMENTS: never[];
export declare const defaultModifiers: ({
    name: string;
    options: {
        offset: number[];
        padding?: undefined;
        fallbackPlacements?: undefined;
        gpuAcceleration?: undefined;
        adaptive?: undefined;
    };
} | {
    name: string;
    options: {
        padding: {
            top: number;
            bottom: number;
            left: number;
            right: number;
        };
        offset?: undefined;
        fallbackPlacements?: undefined;
        gpuAcceleration?: undefined;
        adaptive?: undefined;
    };
} | {
    name: string;
    options: {
        padding: number;
        fallbackPlacements: never[];
        offset?: undefined;
        gpuAcceleration?: undefined;
        adaptive?: undefined;
    };
} | {
    name: string;
    options: {
        gpuAcceleration: boolean;
        adaptive: boolean;
        offset?: undefined;
        padding?: undefined;
        fallbackPlacements?: undefined;
    };
})[];
export declare const defaultPopperOptions: {
    type: PropType<Partial<Options>>;
    default: () => Partial<Options>;
};
