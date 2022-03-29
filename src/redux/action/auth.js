import * as types from "../actionType/auth";

export const login = (name, username) => {
  return {
    type: types.LOGIN,
    payload: {
      name,
      username,
    },
  };
};

export const logout = () => {
  return {
    type: types.LOGOUT,
    payload: null,
  };
};
