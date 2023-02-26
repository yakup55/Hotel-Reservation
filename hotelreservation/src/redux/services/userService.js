import axios from "axios";

class UserService {
  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASEURL}/User`;
  }
  async getUserList() {
    const url = `${this.baseUrl}/GetUserList`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async getByUserEmail(email) {
    const url = `${this.baseUrl}/GetByUserEmail/${email}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async addUser(user) {
    const url = `${this.baseUrl}/CreateUser`;
    return await axios.post(url, user).then((resp) => resp.data);
  }
  async deleteUser(id) {
    const url = `${this.baseUrl}/DeleteUser/${id}`;
    return await axios.delete(url).then((resp) => resp.data);
  }
  async updateUser(user, id) {
    const url = `${this.baseUrl}/UpdateUser/${id}`;
    return await axios.put(url, user).then((resp) => resp.data);
  }
}
export default UserService;
