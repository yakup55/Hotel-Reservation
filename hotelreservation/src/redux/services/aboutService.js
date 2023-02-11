import axios from "axios";

class AboutService {
  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASEURL}/About`;
  }
  async getAboutList() {
    const url = `${this.baseUrl}/GetAboutList`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async getByAbout(id) {
    const url = `${this.baseUrl}/GetByAbout/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async addAbout(about) {
    const url = `${this.baseUrl}/AddAbout`;
    return await axios.post(url, about).then((resp) => resp.data);
  }
  async deleteAbout(id) {
    const url = `${this.baseUrl}/DeleteAbout/${id}`;
    return await axios.delete(url).then((resp) => resp.data);
  }
  async updateAbout(about) {
    const url = `${this.baseUrl}/UpdateAbout`;
    return await axios.put(url, about).then((resp) => resp.data);
  }
}
export default AboutService;
