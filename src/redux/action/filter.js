import * as types from "../actionType/filter";

export const setCategory = (category = null) => {
  return {
    type: types.SET_CATEGORY,
    payload: category,
  };
};

export const setState = (stateSelected = null) => {
  return {
    type: types.SET_STATE,
    payload: stateSelected,
  };
};
