import ajax from './ajax';
import type { PropType } from 'vue';
import type { Nullable } from 'element-plus/es/utils/types';
import type { ListType, UploadFile, ElFile } from './upload.type';
declare type IFileHanlder = (file: Nullable<ElFile[]>, fileList?: UploadFile[]) => unknown;
declare type AjaxEventListener = (e: ProgressEvent, file: ElFile) => unknown;
declare const _default: import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        default: string;
    };
    action: {
        type: StringConstructor;
        required: true;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    data: {
        type: PropType<Record<string, any>>;
        default: () => null;
    };
    headers: {
        type: PropType<Nullable<Partial<Headers>>>;
        default: () => null;
    };
    method: {
        type: StringConstructor;
        default: string;
    };
    withCredentials: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: PropType<Nullable<boolean>>;
        default: null;
    };
    accept: {
        type: StringConstructor;
        default: string;
    };
    onStart: {
        type: PropType<(file: File) => void>;
        default: (file: File) => void;
    };
    onProgress: {
        type: PropType<AjaxEventListener>;
        default: AjaxEventListener;
    };
    onSuccess: {
        type: PropType<AjaxEventListener>;
        default: AjaxEventListener;
    };
    onError: {
        type: PropType<AjaxEventListener>;
        default: AjaxEventListener;
    };
    beforeUpload: {
        type: PropType<(file: File) => Promise<File | Blob> | boolean | unknown>;
        default: (file: File) => void;
    };
    drag: {
        type: BooleanConstructor;
        default: boolean;
    };
    onPreview: {
        type: PropType<IFileHanlder>;
        default: IFileHanlder;
    };
    onRemove: {
        type: PropType<(file: Nullable<FileList>, rawFile: ElFile) => void>;
        default: (file: Nullable<FileList>, rawFile: ElFile) => void;
    };
    fileList: {
        type: PropType<UploadFile[]>;
        default: () => UploadFile[];
    };
    autoUpload: {
        type: BooleanConstructor;
        default: boolean;
    };
    listType: {
        type: PropType<ListType>;
        default: string;
    };
    httpRequest: {
        type: PropType<typeof ajax> | PropType<(...args: unknown[]) => Promise<unknown>>;
        default: () => typeof ajax;
    };
    disabled: BooleanConstructor;
    limit: {
        type: PropType<Nullable<number>>;
        default: null;
    };
    onExceed: {
        type: PropType<(files: FileList, fileList: UploadFile[]) => void>;
        default: () => void;
    };
}, {
    reqs: import("vue").Ref<{
        [x: string]: {
            then: <TResult1 = any, TResult2 = never>(onfulfilled?: ((value: any) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined) => Promise<TResult1 | TResult2>;
            catch: <TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null | undefined) => Promise<any>;
            finally: (onfinally?: (() => void) | null | undefined) => Promise<any>;
            readonly [Symbol.toStringTag]: string;
        } | {
            onreadystatechange: ((this: XMLHttpRequest, ev: Event) => any) | null;
            readonly readyState: number;
            readonly response: any;
            readonly responseText: string;
            responseType: XMLHttpRequestResponseType;
            readonly responseURL: string;
            readonly responseXML: Document | null;
            readonly status: number;
            readonly statusText: string;
            timeout: number;
            readonly upload: {
                addEventListener: {
                    <K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestUpload, ev: XMLHttpRequestEventTargetEventMap[K]) => any, options?: boolean | AddEventListenerOptions | undefined): void;
                    (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions | undefined): void;
                };
                removeEventListener: {
                    <K_1 extends keyof XMLHttpRequestEventTargetEventMap>(type: K_1, listener: (this: XMLHttpRequestUpload, ev: XMLHttpRequestEventTargetEventMap[K_1]) => any, options?: boolean | EventListenerOptions | undefined): void;
                    (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions | undefined): void;
                };
                onabort: ((this: XMLHttpRequest, ev: ProgressEvent<EventTarget>) => any) | null;
                onerror: ((this: XMLHttpRequest, ev: ProgressEvent<EventTarget>) => any) | null;
                onload: ((this: XMLHttpRequest, ev: ProgressEvent<EventTarget>) => any) | null;
                onloadend: ((this: XMLHttpRequest, ev: ProgressEvent<EventTarget>) => any) | null;
                onloadstart: ((this: XMLHttpRequest, ev: ProgressEvent<EventTarget>) => any) | null;
                onprogress: ((this: XMLHttpRequest, ev: ProgressEvent<EventTarget>) => any) | null;
                ontimeout: ((this: XMLHttpRequest, ev: ProgressEvent<EventTarget>) => any) | null;
                dispatchEvent: (event: Event) => boolean;
            };
            withCredentials: boolean;
            abort: () => void;
            getAllResponseHeaders: () => string;
            getResponseHeader: (name: string) => string | null;
            open: {
                (method: string, url: string | URL): void;
                (method: string, url: string | URL, async: boolean, username?: string | null | undefined, password?: string | null | undefined): void;
            };
            overrideMimeType: (mime: string) => void;
            send: (body?: Document | XMLHttpRequestBodyInit | null | undefined) => void;
            setRequestHeader: (name: string, value: string) => void;
            readonly DONE: number;
            readonly HEADERS_RECEIVED: number;
            readonly LOADING: number;
            readonly OPENED: number;
            readonly UNSENT: number;
            addEventListener: {
                <K_2 extends keyof XMLHttpRequestEventMap>(type: K_2, listener: (this: XMLHttpRequest, ev: XMLHttpRequestEventMap[K_2]) => any, options?: boolean | AddEventListenerOptions | undefined): void;
                (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions | undefined): void;
            };
            removeEventListener: {
                <K_3 extends keyof XMLHttpRequestEventMap>(type: K_3, listener: (this: XMLHttpRequest, ev: XMLHttpRequestEventMap[K_3]) => any, options?: boolean | EventListenerOptions | undefined): void;
                (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions | undefined): void;
            };
            onabort: ((this: XMLHttpRequest, ev: ProgressEvent<EventTarget>) => any) | null;
            onerror: ((this: XMLHttpRequest, ev: ProgressEvent<EventTarget>) => any) | null;
            onload: ((this: XMLHttpRequest, ev: ProgressEvent<EventTarget>) => any) | null;
            onloadend: ((this: XMLHttpRequest, ev: ProgressEvent<EventTarget>) => any) | null;
            onloadstart: ((this: XMLHttpRequest, ev: ProgressEvent<EventTarget>) => any) | null;
            onprogress: ((this: XMLHttpRequest, ev: ProgressEvent<EventTarget>) => any) | null;
            ontimeout: ((this: XMLHttpRequest, ev: ProgressEvent<EventTarget>) => any) | null;
            dispatchEvent: (event: Event) => boolean;
        };
    }>;
    mouseover: import("vue").Ref<boolean>;
    inputRef: import("vue").Ref<Nullable<HTMLInputElement>>;
    abort: (file: any) => void;
    post: (rawFile: ElFile) => void;
    handleChange: (e: DragEvent) => void;
    handleClick: () => void;
    handleKeydown: () => void;
    upload: (rawFile: ElFile) => void;
    uploadFiles: (files: FileList) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    type?: unknown;
    action?: unknown;
    name?: unknown;
    data?: unknown;
    headers?: unknown;
    method?: unknown;
    withCredentials?: unknown;
    multiple?: unknown;
    accept?: unknown;
    onStart?: unknown;
    onProgress?: unknown;
    onSuccess?: unknown;
    onError?: unknown;
    beforeUpload?: unknown;
    drag?: unknown;
    onPreview?: unknown;
    onRemove?: unknown;
    fileList?: unknown;
    autoUpload?: unknown;
    listType?: unknown;
    httpRequest?: unknown;
    disabled?: unknown;
    limit?: unknown;
    onExceed?: unknown;
} & {
    type: string;
    disabled: boolean;
    name: string;
    data: Record<string, any>;
    drag: boolean;
    multiple: Nullable<boolean>;
    onError: AjaxEventListener;
    onProgress: AjaxEventListener;
    action: string;
    headers: Nullable<Partial<Headers>>;
    method: string;
    withCredentials: boolean;
    accept: string;
    onStart: (file: File) => void;
    onSuccess: AjaxEventListener;
    beforeUpload: (file: File) => Promise<File | Blob> | boolean | unknown;
    onPreview: IFileHanlder;
    onRemove: (file: Nullable<FileList>, rawFile: ElFile) => void;
    fileList: UploadFile[];
    autoUpload: boolean;
    listType: ListType;
    httpRequest: typeof ajax | ((...args: unknown[]) => Promise<unknown>);
    limit: Nullable<number>;
    onExceed: (files: FileList, fileList: UploadFile[]) => void;
} & {}>, {
    type: string;
    disabled: boolean;
    name: string;
    data: Record<string, any>;
    drag: boolean;
    multiple: Nullable<boolean>;
    onError: AjaxEventListener;
    onProgress: AjaxEventListener;
    headers: Nullable<Partial<Headers>>;
    method: string;
    withCredentials: boolean;
    accept: string;
    onStart: (file: File) => void;
    onSuccess: AjaxEventListener;
    beforeUpload: (file: File) => Promise<File | Blob> | boolean | unknown;
    onPreview: IFileHanlder;
    onRemove: (file: Nullable<FileList>, rawFile: ElFile) => void;
    fileList: UploadFile[];
    autoUpload: boolean;
    listType: ListType;
    httpRequest: typeof ajax | ((...args: unknown[]) => Promise<unknown>);
    limit: Nullable<number>;
    onExceed: (files: FileList, fileList: UploadFile[]) => void;
}>;
export default _default;
