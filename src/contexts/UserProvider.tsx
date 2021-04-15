import { createContext, PropsWithChildren } from "react";
import IUser from "../interfaces/IUser";

const usuario:IUser ={
    windows: "aayestas",
    name : "Astor Ramsés Ayestas Irias"
  }
export const UserContext = createContext<IUser>(usuario);

export const UserProvider = ( {children}:PropsWithChildren<{}> ) => {
    return (
        <UserContext.Provider value={usuario}>
            {children}
        </UserContext.Provider>
    );
} 