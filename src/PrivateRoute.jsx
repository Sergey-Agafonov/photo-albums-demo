import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useAuth } from "./useAuth";

export default function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? (
    children
  ) : (
    <Navigate
      to={{
        pathname: "/",
        state: { from: location },
      }}
    />
  );
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
