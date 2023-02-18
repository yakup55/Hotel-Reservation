import axios from "axios";

class ReservationService {
  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASEURL}/Reservation`;
  }
  async getReservationList() {
    const url = `${this.baseUrl}/GetReservationList`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async getByReservation(id) {
    const url = `${this.baseUrl}/GetByReservation/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async addReservation(reservation) {
    const url = `${this.baseUrl}/AddReservation`;
    return await axios.post(url, reservation).then((resp) => resp.data);
  }
  async updateReservation(reservation) {
    const url = `${this.baseUrl}/UpdateReservation`;
    return await axios.put(url, reservation).then((resp) => resp.data);
  }
  async deleteReservation(id) {
    const url = `${this.baseUrl}/DeleteReservation/${id}`;
    return await axios.delete(url).then((resp) => resp.data);
  }
}
export default ReservationService;
