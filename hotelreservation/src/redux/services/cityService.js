import axios from "axios";

class CityService {
  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASEURL}/City`;
  }
  async getCityList() {
    const url = `${this.baseUrl}/GetCityList`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async popularList() {
    const url = `${this.baseUrl}/GetCityList`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async getByCity(id) {
    const url = `${this.baseUrl}/GetByCity/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async addCity(city) {
    const url = `${this.baseUrl}/AddCity`;
    return await axios.post(url, city).then((resp) => resp.data);
  }
  async updateCity(city) {
    const url = `${this.baseUrl}/UpdateCity`;
    return await axios.get(url, city).then((resp) => resp.data);
  }
  async deleteCity(id) {
    const url = `${this.baseUrl}/DeleteCity/${id}`;
    return await axios.delete(url).then((resp) => resp.data);
  }
}
export default CityService;
