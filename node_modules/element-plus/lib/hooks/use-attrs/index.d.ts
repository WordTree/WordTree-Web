import type { ComputedRef } from 'vue';
interface Params {
    excludeListeners?: boolean;
    excludeKeys?: string[];
}
declare const _default: (params?: Params) => ComputedRef<Record<string, unknown>>;
export default _default;
