import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [userAuth, setUserAuth] = useState({});
  const [isLoading, setIsLoading] = useState({});

  // To check if the user is logged in
  useEffect(() => {
    const fetchData = async () => {
      if (!userAuth) {
        const response = await fetch("http://localhost:4000/profile", {
          credentials: "include",
        });

        const data = await response.json();
        setUserAuth(data);
        setLoading(true);
      }
    };
    fetchData();
  }, []);

  return (
    <UserContext.Provider value={{ userAuth, setUserAuth, isLoading }}>
      {children}
    </UserContext.Provider>
  );
}
