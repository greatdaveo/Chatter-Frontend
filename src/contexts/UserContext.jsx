import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [userAuth, setUserAuth] = useState({});
  const [isLoading, setIsLoading] = useState({});
  const [textEditor, setTextEditor] = useState({ isReady: false });
  const [accessToken, setAccessToken] = useState("");

  // To check if the user is logged in
  useEffect(() => {
    const fetchData = async () => {
      if (!userAuth) {
        const response = await fetch("http://localhost:4000/profile", {
          credentials: "include",
        });

        const data = await response.json();
        setUserAuth(data);
        setIsLoading(true);
      }
    };
    fetchData();
  }, [accessToken]);

  return (
    <UserContext.Provider
      value={{
        userAuth,
        setUserAuth,
        isLoading,
        textEditor,
        setTextEditor,
        accessToken,
        setAccessToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
