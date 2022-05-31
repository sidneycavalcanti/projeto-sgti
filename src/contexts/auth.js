import React, { useState, createContext, useEffect} from "react";
// responsavel por navegacao de paginas 
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext();

export const AuthProvicer = ({children}) => {
    //estancia da funcao
    const navigate  = useNavigate();
    const [user, setUser] = useState(null);
    //verificar se tem dados no localStore antes de abrir o login
    const [loading, setLoading] = useState(true);



//useEffect roda toda vez q inicia a aplicacao
// verifica se tem dados no localstorege
    useEffect(()=> {
        const recoveredUser = localStorage.getItem('user');
        if(recoveredUser){
            //convertendo de volta para objeto
            setUser(JSON.parse(recoveredUser));
        }
        setLoading(false);
    },[])

    const login = (idtm, password) => {
        console.log("login auth", { idtm, password});

        //armazenar dado no local storage para usar quando necessario
        const loggerUser = {
            id:"123",
            idtm,
        };
        localStorage.setItem("user", JSON.stringify(loggerUser))

        //condicional para entrar no home
        if(password === "1010") {
            // localstore so armazena string
        localStorage.setItem("user", JSON.stringify(loggerUser)) // JSON.stringify responsavel por converter para string
            setUser(loggerUser/*{id: "123", idtm}*/);
            navigate("/home-page")
        }
       
    };
    //funcao deslogar do sistema
    const logout = () => {
        //mostra no console
        console.log ("logout");
        //remove usuario do localstorage
        localStorage.removeItem("user")
        //setar usuario como nulo
        setUser(null);
        //voltar para tela de login
        navigate("/");
    };

    return(
        // no campo value consigo exporte as funcoes para quem quiser consumir 
        <AuthContext.Provider 
        value={{authenticated: !!user, user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}