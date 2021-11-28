import type { ExtractPropTypes } from 'vue';
import type { TransferPanelState, Key } from './transfer';
export declare const CHECKED_CHANGE_EVENT = "checked-change";
export declare const useCheckProps: {
    data: {
        type: ArrayConstructor;
        default(): never[];
    };
    optionRender: FunctionConstructor;
    placeholder: StringConstructor;
    title: StringConstructor;
    filterable: BooleanConstructor;
    format: ObjectConstructor;
    filterMethod: FunctionConstructor;
    defaultChecked: ArrayConstructor;
    props: ObjectConstructor;
};
export declare const useCheck: (props: ExtractPropTypes<typeof useCheckProps>, panelState: TransferPanelState) => {
    labelProp: import("vue").ComputedRef<any>;
    keyProp: import("vue").ComputedRef<any>;
    disabledProp: import("vue").ComputedRef<any>;
    filteredData: import("vue").ComputedRef<unknown[]>;
    checkableData: import("vue").ComputedRef<unknown[]>;
    checkedSummary: import("vue").ComputedRef<any>;
    isIndeterminate: import("vue").ComputedRef<boolean>;
    updateAllChecked: () => void;
    handleAllCheckedChange: (value: Key[]) => void;
};
