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
}
export default CommentService;
