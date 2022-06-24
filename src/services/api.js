import axios from 'axios';
export const api = axios.create({
    baseURL: "http://localhost:5050",
});

export const creatSession = async (idtm, password) => {
    return api.post("/login", {idtm, password});
    
};
