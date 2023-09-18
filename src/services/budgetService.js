import http from '../http-common';

class BudgetService {
    getAll() {
      return http.get();
    }
  
    get(id) {
      return http.get(`/${id}`);
    }
  
    create(budgetData) {
      return http.post(`/save`, budgetData);
    }
  
  
  
    delete(id) {
      return http.delete(`/delete/${id}`);
    }
  }
  
  export default new BudgetService();