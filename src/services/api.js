import axios from 'axios';
export const api = axios.create({
    baseURL: "http://locahost:3001",
});

export const creatSession = async (idtm, password) => {
    return api.post("/sessions", {idtm, password});
};
