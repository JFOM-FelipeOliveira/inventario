import Axios from "axios";
import { createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  Axios.get("http://localhost:3001/buscauser").then((Response) => {
      localStorage.setItem("users_bd", JSON.stringify(Response.data));
    });

  const usersStorage = localStorage.getItem("users_bd");

  const signin = (email, senha) => {
    const userToken = localStorage.getItem("user_token");

    localStorage.setItem("user_token", email);

    if (userToken && usersStorage) {
      const hasUser = JSON.parse(usersStorage)?.filter(
        (user) => user.email === userToken
      );

      if (hasUser.length !== 0) {
        if (hasUser[0].email === email && hasUser[0].senha === senha) {
          const token = Math.random().toString(36).substring(2);
          localStorage.setItem("user_token", JSON.stringify({ email, token }));
          setUser({ email, senha });
          return;
        } else {
          return "E-mail ou senha incorretos"
        }
      } else {
        return "Usuário não cadastrado";
      }
    }
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem("user_token");
  };

  return (
    <AuthContext.Provider value={{ user, signed: !!user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
