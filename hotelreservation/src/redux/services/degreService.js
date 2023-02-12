import axios from "axios";

class DegreService {
  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASEURL}/Degre`;
  }
  async getDegreList() {
    const url = `${this.baseUrl}/GetDegreList`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async getByDegre(id) {
    const url = `${this.baseUrl}/GetByDegre/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async addDegre(degre) {
    const url = `${this.baseUrl}/AddDegre`;
    return await axios.post(url, degre).then((resp) => resp.data);
  }
  async updateDegre(degre) {
    const url = `${this.baseUrl}/UpdateDegre`;
    return await axios.get(url, degre).then((resp) => resp.data);
  }
  async deleteDegre(id) {
    const url = `${this.baseUrl}/DeleteDegre/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
}
export default DegreService;
