import axios from "axios";
import { HttpStatusCode } from "axios";
import UserService from "./UserService";
import Api from "./Api";

class AuthService {
  static async checkLogged() {
    try {
      const response = await Api.get("users/" + localStorage.getItem("userId"));
      UserService.SaveUserInfoIntoLocalStorage(response.data);
      console.log(response);
      return true;
    } catch {
      return false;
    }
  }

  static async Login(login, password) {
    try {
      const response = await Api.post("users/login", {
        login: login,
        password: password,
      });
      localStorage.setItem("access-token", response.data.tokens.access);
      localStorage.setItem("refresh-token", response.data.tokens.refresh);
      UserService.SaveUserInfoIntoLocalStorage(response.data);
      return true;
    } catch (ex) {
      console.log(ex);
      return false;
    }
  }

  static async LogOut() {
    try {
      const response = await Api.post("users/logout");
      localStorage.clear();
      return true;
    } catch {
      return false;
    }
  }
}

export default AuthService;
