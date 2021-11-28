import type { PropType } from 'vue';
import type { Trigger } from './use-target-events';
export declare type PopperEffect = 'light' | 'dark';
export declare type Offset = [number, number] | number;
export declare const DARK_EFFECT = "dark";
export declare const LIGHT_EFFECT = "light";
export declare const usePopperControlProps: {
    appendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    arrowOffset: {
        type: NumberConstructor;
    };
    popperOptions: {
        type: PropType<Partial<import("@popperjs/core").Options>>;
        default: () => Partial<import("@popperjs/core").Options>;
    };
    popperClass: {
        type: StringConstructor;
        default: string;
    };
};
export declare const usePopperProps: {
    autoClose: {
        type: NumberConstructor;
        default: number;
    };
    content: {
        type: StringConstructor;
        default: string;
    };
    class: StringConstructor;
    style: ObjectConstructor;
    hideAfter: {
        type: NumberConstructor;
        default: number;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    effect: {
        type: PropType<PopperEffect>;
        default: string;
    };
    enterable: {
        type: BooleanConstructor;
        default: boolean;
    };
    manualMode: {
        type: BooleanConstructor;
        default: boolean;
    };
    showAfter: {
        type: NumberConstructor;
        default: number;
    };
    pure: {
        type: BooleanConstructor;
        default: boolean;
    };
    showArrow: {
        type: BooleanConstructor;
        default: boolean;
    };
    transition: {
        type: StringConstructor;
        default: string;
    };
    trigger: {
        type: PropType<Trigger>;
        default: string;
    };
    visible: {
        type: BooleanConstructor;
        default: undefined;
    };
    stopPopperMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    appendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    arrowOffset: {
        type: NumberConstructor;
    };
    popperOptions: {
        type: PropType<Partial<import("@popperjs/core").Options>>;
        default: () => Partial<import("@popperjs/core").Options>;
    };
    popperClass: {
        type: StringConstructor;
        default: string;
    };
};
export declare const usePopperHook: () => {
    render: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
};
