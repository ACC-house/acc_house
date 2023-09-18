import http from '../http-common';

class AccHouseService {
    getAll() {
      return http.get();
    }
  
    get(id) {
      return http.get(`/${id}`);
    }
  
    create(accHouseData) {
      return http.post(`/save`, accHouseData);
    }
  
  
  
    delete(id) {
      return http.delete(`/delete/${id}`);
    }
  }
  
  export default new AccHouseService();