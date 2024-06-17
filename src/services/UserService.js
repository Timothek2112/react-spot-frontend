import User from "./../models/User";
import Api from "./Api";

class UserService {
  static async GetUserInfo() {}

  static SaveUserInfoIntoLocalStorage(userInfo) {
    localStorage.setItem("name", userInfo.name);
    localStorage.setItem("surname", userInfo.surname);
    localStorage.setItem("patronomyc", userInfo.patronomyc);
    localStorage.setItem("userId", userInfo.id);
    localStorage.setItem("roleId", userInfo.role.id);
    localStorage.setItem("roleName", userInfo.role.title);
  }

  static async GetAllUsers(){
    try {
      const response = await Api.get("users");
      return response.data;
    } catch {
      return [];
    }
  }
  static async GetAllRoles(){
    try{
      const response = await Api.get("users/roles");
      return response.data;
    }
    catch{
      return [];
    }
  }

  static async CreateUser(user){
      const response = await Api.post("users/register", user);
      return response.data;
  }

  static async SaveUser(user){
      const response = await Api.put("users/" + user.id, user);
      return response.data;
  }

  static async DeleteUser(userId) {
    const response = await Api.Delete("users/" + userId);
    return response.data;
  }
}

export default UserService;
