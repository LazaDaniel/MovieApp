import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Root from "./screens/Root";
import Login from "./screens/Login";
import Form from "./screens/Form";
import Logout from "./screens/Logout";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Root} />
          <PrivateRoute exact path="/form" component={Form} />
          <PrivateRoute exact path="/logout" component={Logout} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
