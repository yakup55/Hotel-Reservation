import axios from "axios";

class RoomService {
  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASEURL}/Room`;
  }
  async getRoomList() {
    const url = `${this.baseUrl}/GetRoomList`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async getByRoom(id) {
    const url = `${this.baseUrl}/GetByRoomList/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async addRoom(room) {
    const url = `${this.baseUrl}/AddRoom`;
    return await axios.post(url, room).then((resp) => resp.data);
  }
  async updateRoom(room) {
    const url = `${this.baseUrl}/UpdateRoom`;
    return await axios.put(url, room).then((resp) => resp.data);
  }
  async deleteRoom(id) {
    const url = `${this.baseUrl}/DeleteRoom/${id}`;
    return await axios.delete(url).then((resp) => resp.data);
  }
}
export default RoomService;
