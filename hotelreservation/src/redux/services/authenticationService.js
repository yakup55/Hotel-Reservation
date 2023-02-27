import axios from "axios";

class AuthenticationService {
  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASEURL}/Authentication`;
  }
  async logOut(id) {
    const url = `${this.baseUrl}/LogOut/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async createToken(user) {
    const url = `${this.baseUrl}/CreateToken`;
    return await axios
      .post(url, user)
      .then((resp) => {
        return { status: resp.status, data: resp.data };
      })
      .catch((err) => {
        return { status: err.response.status };
      });
  }
}
export default AuthenticationService;
