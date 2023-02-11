import axios from "axios";

class HotelDetailService {
  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASEURL}/HotelDetail`;
  }
  async getHotelDetailList() {
    const url = `${this.baseUrl}/GetDetailList`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async getByHotelDetail(id) {
    const url = `${this.baseUrl}/GetByDetail/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async addHotelDetail(detail) {
    const url = `${this.baseUrl}/AddHotelDetail`;
    return await axios.post(url, detail).then((resp) => resp.data);
  }
  async updateHotelDetail(detail) {
    const url = `${this.baseUrl}/UpdateHotelDetail`;
    return await axios.put(url, detail).then((resp) => resp.data);
  }
  async deleteHotelDetail(id) {
    const url = `${this.baseUrl}/DeleteHotelDetail(${id})`;
    return await axios.delete(url).then((resp) => resp.data);
  }
}
