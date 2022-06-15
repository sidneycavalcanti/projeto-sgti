import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});

//Você pode alterar o baseURLque depende da url das APIs REST que seu servidor configura.
