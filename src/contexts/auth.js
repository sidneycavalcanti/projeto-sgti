import React, { useState, createContext} from "react";


export const AuthContext = createContext();

export const AuthProvicer = ({children}) => {
    const [user, setUser] = useState(null);

    const login = (idtm, password) => {
        console.log("login auth", { idtm, password});
        setUser({id: "123", idtm});
    };

    const logout = () => {
        console.log ("logout");
    };

    return(
        <AuthContext.Provider 
        value={{authenticated: !!user, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}