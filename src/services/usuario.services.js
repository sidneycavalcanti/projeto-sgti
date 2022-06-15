import http from "../http-common";
class UsuarioDataService {
  getAll() {
    return http.get("/usuario");
  }
  get(id) {
    return http.get(`/usuario/${id}`);
  }
  create(data) {
    return http.post("/usuario", data);
  }
  update(id, data) {
    return http.put(`/usuario/${id}`, data);
  }
  delete(id) {
    return http.delete(`/usuario/${id}`);
  }
  deleteAll() {
    return http.delete(`/usuario`);
  }
  findByTitle(nome) {
    return http.get(`/usuario?nome=${nome}`);
  }
}
export default new UsuarioDataService();

//Nesta etapa, vamos criar um serviço que usa o objeto axios acima para enviar solicitações HTTP.