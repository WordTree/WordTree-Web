import type { App } from 'vue';
declare const ElLoading: {
    install(app: App): void;
    directive: {
        mounted(el: import("./src/directive").ElementLoading, binding: import("vue").DirectiveBinding<any>): void;
        updated(el: import("./src/directive").ElementLoading, binding: import("vue").DirectiveBinding<any>): void;
        unmounted(el: import("./src/directive").ElementLoading): void;
    };
    service: (options?: import("./src/loading.type").ILoadingOptions) => import("./src/loading.type").ILoadingInstance;
};
export default ElLoading;
export { ElLoading };
export declare const ElLoadingDirective: {
    mounted(el: import("./src/directive").ElementLoading, binding: import("vue").DirectiveBinding<any>): void;
    updated(el: import("./src/directive").ElementLoading, binding: import("vue").DirectiveBinding<any>): void;
    unmounted(el: import("./src/directive").ElementLoading): void;
};
export declare const ElLoadingService: (options?: import("./src/loading.type").ILoadingOptions) => import("./src/loading.type").ILoadingInstance;
export * from './src/loading.type';
