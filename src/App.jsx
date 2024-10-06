import { Route, Routes } from "react-router-dom";
import Albums from "./Albums";
import AuthForm from "./AuthForm";
import Photos from "./Photos";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <Routes>
      <Route
        path="/albums/:id"
        element={
          <PrivateRoute>
            <Photos />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="/albums"
        element={
          <PrivateRoute>
            <Albums />
          </PrivateRoute>
        }
      />
      <Route path="/" element={<AuthForm />}></Route>
    </Routes>
  );
}

export default App;
