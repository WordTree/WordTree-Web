import type { ComponentSize } from './types';
export interface InstallOptions {
    size: ComponentSize;
    zIndex: number;
    locale?: any;
}
declare const setConfig: (option: InstallOptions) => void;
declare const getConfig: (key: keyof InstallOptions) => unknown;
export { getConfig, setConfig };
