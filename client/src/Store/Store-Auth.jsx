import { createContext, useContext, useEffect, useState } from "react";
import { removeTokenFromLS, storeTokenInLS } from "./AuthUtils";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState();
  const [properties, setProperties] = useState("");
  const authorizationToken = `Bearer ${token}`;
  let isLoggedIn = !!token;

  const storetokenInLS = (serverToken) => {
    setToken(serverToken);
    storeTokenInLS(serverToken);
    console.log(serverToken);
  };

  const LogoutUser = () => {
    setToken("");
    // return localStorage.removeItem("token");
    setUser(null);
    removeTokenFromLS();
  };

  //authentications-to get currently logged in user data

  const userAuthentications = async () => {
    if (!token) {
      console.error("No token found");
      return;
    }
    try {
      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setUser(data.userData);
      } else {
        console.error("Error fetching User Data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getProperties = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/property/properties",
        {
          method: "GET",
        }
      );
      if (response.ok) {
        const data = await response.json();
        // console.log(data);
        setProperties(data);
      } else {
        console.error(`Error fetching properties: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };


  useEffect(() => {
    getProperties();
    userAuthentications();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  
  return (
    <AuthContext.Provider
      value={{ isLoggedIn, storetokenInLS, LogoutUser, user, properties, authorizationToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("Wrap your APP component under provider");
  }
  return authContextValue;
};