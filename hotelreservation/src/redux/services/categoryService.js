import axios from "axios";

class CategoryService {
  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASEURL}/Category`;
  }
  async getCategoryList() {
    const url = `${this.baseUrl}/GetCategoryList`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async getLastCategory() {
    const url = `${this.baseUrl}/LastCategory`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async getByCategory(id) {
    const url = `${this.baseUrl}/GetByCategory/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async addCategory(Category) {
    const url = `${this.baseUrl}/AddCategory`;
    return await axios.post(url, Category).then((resp) => resp.data);
  }
  async updateCategory(Category) {
    const url = `${this.baseUrl}/UpdateCategory`;
    return await axios.put(url, Category).then((resp) => resp.data);
  }
  async deleteCategory(id) {
    const url = `${this.baseUrl}/DeleteCategory/${id}`;
    return await axios.delete(url).then((resp) => resp.data);
  }
}
export default CategoryService;
