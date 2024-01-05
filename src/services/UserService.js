import User from "./../models/User";

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
}

export default UserService;
