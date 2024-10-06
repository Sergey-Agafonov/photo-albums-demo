import React from "react";
import { Switch, Route } from "react-router-dom";
import AuthForm from "./AuthForm";
import PrivateRoute from "./PrivateRoute";
import Albums from "./Albums";
import Photos from "./Photos";

export default function App() {
  return (
    <Switch>
      <PrivateRoute path="/albums/:id">
        <Photos />
      </PrivateRoute>
      <PrivateRoute path="/albums">
        <Albums />
      </PrivateRoute>
      <Route path="/">
        <AuthForm />
      </Route>
    </Switch>
  );
}
