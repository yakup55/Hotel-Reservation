import axios from "axios";

class TravelContentService {
  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASEURL}/TravelContent`;
  }
  async getTravelContentList() {
    const url = `${this.baseUrl}/GetTravelContentList`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async getByTravelContent(id) {
    const url = `${this.baseUrl}/GetByTravelContent/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async addTravelContent(travelContent) {
    const url = `${this.baseUrl}/AddTravelContent`;
    return await axios.post(url, travelContent).then((resp) => resp.data);
  }
  async updateTravelContent(travelContent) {
    const url = `${this.baseUrl}/UpdateTravelContent`;
    return await axios.put(url, travelContent).then((resp) => resp.data);
  }
  async deleteTravelContent(id) {
    const url = `${this.baseUrl}/DeleteTravelContent/${id}`;
    return await axios.delete(url).then((resp) => resp.data);
  }
  async travelWritingsContentList(id) {
    const url = `${this.baseUrl}/TravelWritingsContent/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async travelWritingsContentUserList(userId, id) {
    const url = `${this.baseUrl}/TravelWritingsUserContentList/${userId}/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
}
export default TravelContentService;
