import type { ValidateFieldsError } from 'async-validator';
import type { PropType } from 'vue';
import type { ComponentSize } from 'element-plus/es/utils/types';
import type { ValidateFieldCallback } from 'element-plus/es/tokens';
export interface Callback {
    (isValid?: boolean, invalidFields?: ValidateFieldsError): void;
}
declare const _default: import("vue").DefineComponent<{
    model: ObjectConstructor;
    rules: PropType<Partial<Record<string, import("./form.type").FormItemRule | import("./form.type").FormItemRule[]>>>;
    labelPosition: StringConstructor;
    labelWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    labelSuffix: {
        type: StringConstructor;
        default: string;
    };
    inline: BooleanConstructor;
    inlineMessage: BooleanConstructor;
    statusIcon: BooleanConstructor;
    showMessage: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: PropType<ComponentSize>;
    disabled: BooleanConstructor;
    validateOnRuleChange: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideRequiredAsterisk: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollToError: BooleanConstructor;
}, {
    validate: (callback?: Callback | undefined) => Promise<boolean> | undefined;
    resetFields: () => void;
    clearValidate: (props?: string | string[]) => void;
    validateField: (props: string | string[], cb: ValidateFieldCallback) => void;
    scrollToField: (prop: string) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "validate"[], "validate", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    model?: unknown;
    rules?: unknown;
    labelPosition?: unknown;
    labelWidth?: unknown;
    labelSuffix?: unknown;
    inline?: unknown;
    inlineMessage?: unknown;
    statusIcon?: unknown;
    showMessage?: unknown;
    size?: unknown;
    disabled?: unknown;
    validateOnRuleChange?: unknown;
    hideRequiredAsterisk?: unknown;
    scrollToError?: unknown;
} & {
    disabled: boolean;
    inline: boolean;
    labelWidth: string | number;
    labelSuffix: string;
    inlineMessage: boolean;
    statusIcon: boolean;
    showMessage: boolean;
    validateOnRuleChange: boolean;
    hideRequiredAsterisk: boolean;
    scrollToError: boolean;
} & {
    size?: ComponentSize | undefined;
    model?: Record<string, any> | undefined;
    labelPosition?: string | undefined;
    rules?: Partial<Record<string, import("./form.type").FormItemRule | import("./form.type").FormItemRule[]>> | undefined;
}> & {
    onValidate?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    inline: boolean;
    labelWidth: string | number;
    labelSuffix: string;
    inlineMessage: boolean;
    statusIcon: boolean;
    showMessage: boolean;
    validateOnRuleChange: boolean;
    hideRequiredAsterisk: boolean;
    scrollToError: boolean;
}>;
export default _default;
