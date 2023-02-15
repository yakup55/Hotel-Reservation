import axios from "axios";

class QuentionsService {
  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASEURL}/Quentions`;
  }
  async getQuentionsList() {
    const url = `${this.baseUrl}/GetQuentionsList`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async getByQuentions(id) {
    const url = `${this.baseUrl}/GetByQuentions/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async addQuentions(quentions) {
    const url = `${this.baseUrl}/AddQuentions`;
    return await axios.post(url, quentions).then((resp) => resp.data);
  }
  async updateQuentions(quentions) {
    const url = `${this.baseUrl}/UpdateQuentions`;
    return await axios.put(url, quentions).then((resp) => resp.data);
  }
  async deleteQuentions(id) {
    const url = `${this.baseUrl}/DeleteQuentions/${id}`;
    return await axios.delete(url).then((resp) => resp.data);
  }
  async hotelQuentions(id) {
    const url = `${this.baseUrl}/HotelQuentions/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
}
export default QuentionsService;
