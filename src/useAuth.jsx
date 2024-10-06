import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";

const authContext = createContext();

export default function ProvideAuth({ children }) {
  const [user, setUser] = useState(null);

  const signin = async (username, successCb, failureCb) => {
    let user = null;

    try {
      const resp = await fetch(
        `https://jsonplaceholder.typicode.com/users?username=${username}`
      );
      user = (await resp.json())[0];
    } catch (e) {
      alert(e);
      failureCb();
    }

    if (user) {
      setUser(user);
      successCb();
    } else {
      failureCb();
    }
  };

  return (
    <authContext.Provider value={{ user, signin }}>
      {children}
    </authContext.Provider>
  );
}

ProvideAuth.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useAuth() {
  return useContext(authContext);
}
