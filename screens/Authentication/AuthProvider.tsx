import React, { useState } from "react";
import { _storeData, _removeItem, _retrieveData } from "../../utils";

type User = null | { username: string };

export const AuthContext = React.createContext<{
  user: User;
  login: () => void;
  logout: () => void;
  getUser: () => void;
}>({
  user: null,
  login: () => {},
  logout: () => {},
  getUser: () => {}
});

interface AuthProviderProps {}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        login: () => {
          const fakeUser = { username: "bob" };
          _storeData("user",JSON.stringify(fakeUser)).then(()=> {
            setUser(fakeUser);
          })
        },
        logout: () => {
          setUser(null);
          _removeItem("user");
        },
        getUser: () => {
          _retrieveData("user").then((user)=> {
            setUser(JSON.parse(user))
          })
        }
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};