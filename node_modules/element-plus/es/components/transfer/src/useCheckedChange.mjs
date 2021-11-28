const LEFT_CHECK_CHANGE_EVENT = "left-check-change";
const RIGHT_CHECK_CHANGE_EVENT = "right-check-change";
const useCheckedChange = (checkedState, emit) => {
  const onSourceCheckedChange = (val, movedKeys) => {
    checkedState.leftChecked = val;
    if (movedKeys === void 0)
      return;
    emit(LEFT_CHECK_CHANGE_EVENT, val, movedKeys);
  };
  const onTargetCheckedChange = (val, movedKeys) => {
    checkedState.rightChecked = val;
    if (movedKeys === void 0)
      return;
    emit(RIGHT_CHECK_CHANGE_EVENT, val, movedKeys);
  };
  return {
    onSourceCheckedChange,
    onTargetCheckedChange
  };
};

export { LEFT_CHECK_CHANGE_EVENT, RIGHT_CHECK_CHANGE_EVENT, useCheckedChange };
//# sourceMappingURL=useCheckedChange.mjs.map
