import axios from "axios";

class RoomDetailService {
  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASEURL}/RoomDetail`;
  }
  async getDetailRoomList() {
    const url = `${this.baseUrl}/GetRoomDetailList`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async getByRoomDetail(id) {
    const url = `${this.baseUrl}/GetByDetail/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async addRoomDetail(room) {
    const url = `${this.baseUrl}/AddDetail`;
    return await axios.post(url, room).then((resp) => resp.data);
  }
  async updateRoomDetail(room) {
    const url = `${this.baseUrl}/UpdateDetail`;
    return await axios.put(url, room).then((resp) => resp.data);
  }
  async deleteRoomDetail(id) {
    const url = `${this.baseUrl}/DeleteDetail/${id}`;
    return await axios.delete(url).then((resp) => resp.data);
  }
}
export default RoomDetailService;
