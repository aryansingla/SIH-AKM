export default class ApiService {
  constructor() {
    this.apiBaseUrl = "https://frisk-sih.herokuapp.com/";
  }

  callApi = async (url, bodyParams) => {
    try {
      const res = await fetch(this.apiBaseUrl + url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
        mode: "cors",
        credentials: "include",
        withCredentials: true,
        body: JSON.stringify(bodyParams),
      });

      const data = await res.json();

      return data;
    } catch (err) {
      return {
        status: "error",
        error: "Some error occurred, please try again later",
      };
    }
  };

  signup = (name, username, password) => {
    return this.callApi("user/signup", { name, username, password });
  };

  login = (username, password) => {
    return this.callApi("user/login", { username, password });
  };

  sendOtp = (username) => {
    return this.callApi("user/reset", { username });
  };

  resetPassword = (username, otp, password) => {
    return this.callApi("user/reset/password", { username, otp, password });
  };

  logout = () => {
    return this.callApi("user/logout", {});
  };

  changePassword = (oldPassword, newPassword) => {
    return this.callApi("user/update/password", {
      oldPassword,
      newPassword,
    });
  };

  getUser = () => {
    return this.callApi("user", {});
  };

  getSchemes = (category = null, state = null) => {
    return this.callApi("scheme/all", { state, category });
  };
}
