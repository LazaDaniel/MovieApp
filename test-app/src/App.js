import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Root from "./screens/Root";
import Login from "./screens/Login";
import Form from "./screens/Form";
import Movies from "./screens/Movies.js";
import Logout from "./screens/Logout";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import { Provider } from "react-redux"
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './store'


const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>
          <Router>
            <div>
              <PrivateRoute exact path="/" component={Root} />
              <PrivateRoute exact path="/form" component={Form} />
              <PrivateRoute exact path="/logout" component={Logout} />
              <PrivateRoute exact path="/movies" component={Movies} />
              <Route exact path="/login" component={Login}/>
            </div>
          </Router>
        </AuthProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
