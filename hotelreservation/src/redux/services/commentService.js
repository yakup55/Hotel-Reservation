import axios from "axios";

class CommentService {
  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASEURL}/Comment`;
  }
  async getCommentList() {
    const url = `${this.baseUrl}/GetCommentList`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async getByComment(id) {
    const url = `${this.baseUrl}/GetByComment/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async addComment(comment) {
    const url = `${this.baseUrl}/AddComment`;
    return await axios.post(url, comment).then((resp) => resp.data);
  }
  async deleteComment(id) {
    const url = `${this.baseUrl}/DeleteComment/${id}`;
    return await axios.delete(url).then((resp) => resp.data);
  }
  async updateComment(comment) {
    const url = `${this.baseUrl}/UpdateComment`;
    return await axios.put(url, comment).then((resp) => resp.data);
  }
  async commentHotelList(id) {
    const url = `${this.baseUrl}/CommentHotelList/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async popularCommentHotel(id) {
    const url = `${this.baseUrl}/PopularCommentHotel/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async commentActive(id) {
    const url = `${this.baseUrl}/CommentActive/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async commentPassive(id) {
    const url = `${this.baseUrl}/CommentPassive/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async commentUserList(id) {
    const url = `${this.baseUrl}/CommentUserList/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
}
export default CommentService;
