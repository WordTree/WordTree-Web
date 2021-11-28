import type { InjectionKey } from 'vue';
export interface scrollbarContext {
    scrollbarElement: HTMLDivElement;
    wrapElement: HTMLDivElement;
}
export declare const scrollbarContextKey: InjectionKey<scrollbarContext>;
