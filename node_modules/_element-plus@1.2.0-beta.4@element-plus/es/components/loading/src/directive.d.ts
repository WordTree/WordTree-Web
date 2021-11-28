import type { DirectiveBinding } from 'vue';
import type { ILoadingInstance } from './loading.type';
declare const INSTANCE_NAME = "ElLoading";
export interface ElementLoading extends HTMLElement {
    [INSTANCE_NAME]?: ILoadingInstance;
}
declare const vLoading: {
    mounted(el: ElementLoading, binding: DirectiveBinding): void;
    updated(el: ElementLoading, binding: DirectiveBinding): void;
    unmounted(el: ElementLoading): void;
};
export default vLoading;
