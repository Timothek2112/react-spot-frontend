import Api from "./Api";

class GroupService {
  static async GetAllGroups() {
    try {
      const response = await Api.get("groups");
      return response.data;
    } catch {
      return [];
    }
  }

  static async GetGroupById(id) {
    try {
      const response = await Api.get("groups/" + id);
      return response.data;
    } catch {
      return { id: 0, title: "" };
    }
  }
}

export default GroupService;
