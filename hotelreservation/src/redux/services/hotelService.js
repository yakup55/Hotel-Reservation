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
  async updateHotel(hotel, id) {
    const url = `${this.baseUrl}/UpdateHotel/${id}`;
    return await axios.put(url, hotel).then((resp) => resp.data);
  }
  async deleteHotel(id) {
    const url = `${this.baseUrl}/DeleteHotel/${id}`;
    return await axios.delete(url).then((resp) => resp.data);
  }
  async hotelCategoryList(id) {
    const url = `${this.baseUrl}/HotelCategoryList/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async hotelOneDetail(id) {
    const url = `${this.baseUrl}/HotelOneDetail/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async hotelCityList(id) {
    const url = `${this.baseUrl}/HotelCityList/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async hotelDegreList(id) {
    const url = `${this.baseUrl}/HotelDegreList/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async searchHotelList(name) {
    const url = `${this.baseUrl}/SearchHotelList}`;
    return await axios.post(url, name).then((resp) => resp.data);
  }
}
export default HotelService;
