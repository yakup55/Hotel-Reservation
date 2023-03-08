import axios from "axios";

class RoleService {
  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASEURL}/Role`;
  }
  async getRoleList() {
    const url = `${this.baseUrl}/GetRoleList`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async getByRole(id) {
    const url = `${this.baseUrl}/GetByRole/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async addRole(role) {
    const url = `${this.baseUrl}/CreateRole`;
    return await axios.post(url, role).then((resp) => resp.data);
  }
  async deleteRole(id) {
    const url = `${this.baseUrl}/DeleteRole/${id}`;
    return await axios.delete(url).then((resp) => resp.data);
  }
  async assignRoleTo(role) {
    const url = `${this.baseUrl}/AssignRoleTo`;
    return await axios.post(url, role).then((resp) => resp.data);
  }
  async updateRole(role) {
    const url = `${this.baseUrl}/UpdateRole`;
    return await axios.put(url, role).then((resp) => resp.data);
  }
}
export default RoleService;
