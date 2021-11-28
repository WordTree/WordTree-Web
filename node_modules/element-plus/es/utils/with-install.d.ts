import type { SFCWithInstall } from './types';
export declare const withInstall: <T, E extends Record<string, any>>(main: T, extra?: E | undefined) => SFCWithInstall<T> & E;
export declare const withInstallFunction: <T>(fn: T, name: string) => SFCWithInstall<T>;
export declare const withNoopInstall: <T>(component: T) => SFCWithInstall<T>;
