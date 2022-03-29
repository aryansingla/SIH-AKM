import * as types from "../actionType/scheme";

export const setSchemes = (schemes) => {
  return {
    type: types.SET_SCHEME,
    payload: {
      schemes,
    },
  };
};
