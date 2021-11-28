import type { configProviderProps } from 'element-plus/es/components/config-provider/config-provider';
import type { InjectionKey, ExtractPropTypes } from 'vue';
export declare type ConfigProvdierContext = ExtractPropTypes<typeof configProviderProps>;
export declare const configProviderContextKey: InjectionKey<ConfigProvdierContext>;
