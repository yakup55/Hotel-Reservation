import axios from "axios";

class HotelService {
  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASEURL}/Hotel`;
  }
  async getHotelList() {
    const url = `${this.baseUrl}/GetHotelList`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async lastHotelList() {
    const url = `${this.baseUrl}/LastHotel`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async getByHotel(id) {
    const url = `${this.baseUrl}/GetByHotel/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async addHotel(hotel) {
    const url = `${this.baseUrl}/AddHotel`;
    return await axios.post(url, hotel).then((resp) => resp.data);
  }
  async updateHotel(hotel) {
    const url = `${this.baseUrl}/UpdateHotel`;
    return await axios.put(url, hotel).then((resp) => resp.data);
  }
  async deleteHotel(id) {
    const url = `${this.baseUrl}/DeleteHotel/${id}`;
    return await axios.delete(url).then((resp) => resp.data);
  }
}
export default HotelService;
