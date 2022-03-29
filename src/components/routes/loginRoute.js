import { Redirect, Route, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect } from "react";
import { login as loginAction } from "../../redux/action/auth";
import ApiService from "../../service/apiService";

const ProtectedRoute = ({ children, user, loginAction, ...restOfProps }) => {
  const search = useLocation().search;
  const next = new URLSearchParams(search).get("next");

  useEffect(async () => {
    const response = await new ApiService().getUser();

    if (response.status === "ok") {
      loginAction(response.name, response.username);
    }
  }, []);

  return !user ? (
    <Route {...restOfProps}>{children}</Route>
  ) : (
    <Redirect to={next ? next : `/`} />
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginAction: (name, username) => dispatch(loginAction(name, username)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);
