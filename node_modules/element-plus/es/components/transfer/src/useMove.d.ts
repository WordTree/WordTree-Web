import type { ComputedRef } from 'vue';
import type { TransferProps, TransferCheckedState } from './transfer';
export declare const useMove: (props: TransferProps, checkedState: TransferCheckedState, propsKey: ComputedRef<string>, emit: any) => {
    addToLeft: () => void;
    addToRight: () => void;
};
