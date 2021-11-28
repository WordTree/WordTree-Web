import type { PropType } from 'vue';
import type { UploadFile } from './upload.type';
declare const _default: import("vue").DefineComponent<{
    files: {
        type: PropType<UploadFile[]>;
        default: () => File[];
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    handlePreview: {
        type: PropType<(file: UploadFile) => void>;
        default: () => () => void;
    };
    listType: {
        type: PropType<"text" | "picture" | "picture-card">;
        default: string;
    };
}, {
    focusing: import("vue").Ref<boolean>;
    handleClick: (file: UploadFile) => void;
    handleRemove: (e: Event, file: UploadFile) => void;
    onFileClicked: (e: Event) => void;
    t: (...args: any[]) => string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "remove"[], "remove", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    files?: unknown;
    disabled?: unknown;
    handlePreview?: unknown;
    listType?: unknown;
} & {
    disabled: boolean;
    listType: "text" | "picture" | "picture-card";
    files: UploadFile[];
    handlePreview: (file: UploadFile) => void;
} & {}> & {
    onRemove?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    listType: "text" | "picture" | "picture-card";
    files: UploadFile[];
    handlePreview: (file: UploadFile) => void;
}>;
export default _default;
