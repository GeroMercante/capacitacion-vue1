import axios from "axios";

export class UserServiceAPI {
  static usuarios = [];

  static getUsersAPI() {
    let dataURL = "https://jsonplaceholder.typicode.com/users";
    return axios.get(dataURL);
  }

  static getUser(userId) {
    let dataURL = `https://jsonplaceholder.typicode.com/users/${userId}`;
    return axios.get(dataURL);
  }
}
