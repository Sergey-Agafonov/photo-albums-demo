import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";

export default function AuthForm() {
  const navigate = useNavigate();
  const { signin } = useAuth();
  const [username, setUsername] = useState();

  const login = useCallback(
    (e) => {
      e.preventDefault();

      signin(
        username,
        () => navigate({ pathname: "/albums" }),
        () => alert("Could not authenticate")
      );
    },
    [username, signin, navigate]
  );

  return (
    <form className="d-flex align-items-center flex-column justify-content-center vh-100">
      <h3>Hello</h3>
      <div className="form-group">
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Username"
        />
      </div>
      <button onClick={login} className="btn btn-primary">
        Log in
      </button>
    </form>
  );
}
