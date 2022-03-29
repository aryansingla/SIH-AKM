import styled from "styled-components";
import SignUpPage from "./components/SignUpPage.js";
import HomePage from "./components/HomePage.js";
import LoginPage from "./components/LoginPage.js";
import SchemePage from "./components/SchemePage.js";
import Password from "./components/Password.js";
import ProtectedRoute from "./components/routes/protectedRoute.js";
import UnprotectedRoute from "./components/routes/unprotectedRoute.js";
import LoginRoute from "./components/routes/loginRoute.js";
import ProfilePage from "./components/ProfilePage.js";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <UnprotectedRoute exact path="/">
            <HomePage />
          </UnprotectedRoute>

          <UnprotectedRoute exact path="/signup">
            <SignUpPage />
          </UnprotectedRoute>

          <LoginRoute exact path="/login">
            <LoginPage />
          </LoginRoute>

          <ProtectedRoute exact path="/scheme" next="/scheme">
            <SchemePage />
          </ProtectedRoute>

          <unprotectedRoute exact path="/signup">
            <Password />
          </unprotectedRoute>

          <ProtectedRoute exact path="/profile">
            <ProfilePage />
          </ProtectedRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
