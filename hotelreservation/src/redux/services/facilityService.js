import axios from "axios";

class FacilityService {
  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASEURL}/Facility`;
  }
  async getFacilityList() {
    const url = `${this.baseUrl}/GetFacilityList`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async getByFacility(id) {
    const url = `${this.baseUrl}/GetByFacility/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async addFacility(facility) {
    const url = `${this.baseUrl}/AddFacility`;
    return await axios.post(url, facility).then((resp) => resp.data);
  }
  async updateFacility(facility) {
    const url = `${this.baseUrl}/UpdateFacility`;
    return await axios.put(url, facility).then((resp) => resp.data);
  }
  async deleteFacility(id) {
    const url = `${this.baseUrl}/DeleteFacility/${id}`;
    return await axios.delete(url).then((resp) => resp.data);
  }
  async facilityHotel(id) {
    const url = `${this.baseUrl}/FacilityHotel/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
}
export default FacilityService;
