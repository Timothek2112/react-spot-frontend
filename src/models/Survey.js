import User from "./User";

export class Survey {
  id = 0;
  title = "";
  description = "";
  accessCode = "";
  startTime = new Date();
  endTime = new Date();
  active = false;
  groupId = 0;
  department = "";
  userId = 0;
  user = new User();
  questions = [];
}
