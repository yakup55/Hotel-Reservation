import axios from "axios";

class ContactService {
  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASEURL}/Contact`;
  }
  async getContactList() {
    const url = `${this.baseUrl}/GetContactList`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async getByContact() {
    const url = `${this.baseUrl}/GetByContact`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async addContact(contact) {
    const url = `${this.baseUrl}/AddContact`;
    return await axios.post(url, contact).then((resp) => resp.data);
  }
  async updateContact(contact) {
    const url = `${this.baseUrl}/UpdateContact`;
    return await axios.put(url, contact).then((resp) => resp.data);
  }
  async deleteContact(id) {
    const url = `${this.baseUrl}/DeleteContact/${id}`;
    return await axios.delete(url).then((resp) => resp.data);
  }
}
export default ContactService;
