import axios from "axios";

class TravelWritingsService {
  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASEURL}/TravelWritings`;
  }
  async getTravelWritingsList() {
    const url = `${this.baseUrl}/GetTravelWritingsList`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async getByTravelWritings(id) {
    const url = `${this.baseUrl}/GetByTravelWritings/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async addTravelWritings(travelWritings) {
    const url = `${this.baseUrl}/AddTravelWritings`;
    return await axios.post(url, travelWritings).then((resp) => resp.data);
  }
  async updateTravelWritings(travelWritings) {
    const url = `${this.baseUrl}/UpdateTravelWritings`;
    return await axios.put(url, travelWritings).then((resp) => resp.data);
  }
  async delteTravelWritings(id) {
    const url = `${this.baseUrl}/DeleteTravelWritings/${id}`;
    return await axios.delete(url).then((resp) => resp.data);
  }
  async travelWritingsUserList(userId) {
    const url = `${this.baseUrl}/TravelWritingsUserList/${userId}`;
    return await axios.get(url).then((resp) => resp.data);
  }
}
export default TravelWritingsService;
