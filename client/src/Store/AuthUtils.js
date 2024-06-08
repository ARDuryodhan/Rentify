// authUtils.js
export const storeTokenInLS = (serverToken) => {
    localStorage.setItem("token", serverToken);
  };
  
  export const removeTokenFromLS = () => {
    localStorage.removeItem("token");
  };
  