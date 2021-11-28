export declare type TranslatePair = {
    [key: string]: string | string[] | TranslatePair;
};
export declare type Language = {
    name: string;
    el: TranslatePair;
};
export declare const i18n: (fn: (...args: any[]) => string) => void;
export declare const restoreHandler: () => (...args: any[]) => string | undefined;
export declare const t: (...args: any[]) => string;
export declare const use: (l: Language) => void;
export declare const setLocale: (l: Language) => void;
