import React, { useState } from "react";
import { AsyncStorage } from "react-native";
import { _storeData, _removeItem } from "../../utils";

type User = null | { username: string };

export const AuthContext = React.createContext<{
  user: User;
  login: () => void;
  logout: () => void;
}>({
  user: null,
  login: () => {},
  logout: () => {}
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
          setUser(fakeUser);
          _storeData("user",JSON.stringify(fakeUser) )
        },
        logout: () => {
          setUser(null);
          _removeItem("user");
        }
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};