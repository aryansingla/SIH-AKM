import { Redirect, Route, useLocation } from "react-router-dom";
import { connect } from "react-redux";

const UnprotectedRoute = ({ children, user, ...restOfProps }) => {
  const search = useLocation().search;
  const next = new URLSearchParams(search).get("next");

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

export default connect(mapStateToProps)(UnprotectedRoute);
