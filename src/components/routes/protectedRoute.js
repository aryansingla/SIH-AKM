import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

const ProtectedRoute = ({ children, user, next, ...restOfProps }) => {
  return user ? (
    <Route {...restOfProps}>{children}</Route>
  ) : (
    <Redirect to={next ? `/login?next=${next}` : "/login"} />
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(ProtectedRoute);
