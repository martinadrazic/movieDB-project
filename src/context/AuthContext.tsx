import { createContext, PropsWithChildren, useContext, useState } from "react";
import { User, USERS } from "./constants.ts";

interface AuthContextType {
  currentUser: User;
  switchUser: (userId: string) => void;
}

// Context
export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: PropsWithChildren) {
  const [currentUser, setCurrentUser] = useState({
    id: "one",
    name: "John Doe",
  });

  const switchUser = (userId: string) => {
    setCurrentUser(USERS[userId]);
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        switchUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = (): AuthContextType => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("AuthContext not defined");
  }

  return authContext;
};
