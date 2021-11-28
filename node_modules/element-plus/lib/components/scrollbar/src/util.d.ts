import type { CSSProperties } from 'vue';
export declare const BAR_MAP: {
    vertical: {
        offset: string;
        scroll: string;
        scrollSize: string;
        size: string;
        key: string;
        axis: string;
        client: string;
        direction: string;
    };
    horizontal: {
        offset: string;
        scroll: string;
        scrollSize: string;
        size: string;
        key: string;
        axis: string;
        client: string;
        direction: string;
    };
};
export declare const renderThumbStyle: ({ move, size, bar }: {
    move: any;
    size: any;
    bar: any;
}) => CSSProperties;
