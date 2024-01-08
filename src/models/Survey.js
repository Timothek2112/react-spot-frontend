import User from "./User";

export class Survey {
  constructor() {
    if (this.endTime == new Date(1970, 0, 1, 7, 0, 0)) {
      this.endTimeNeeded = false;
    } else {
      this.endTimeNeeded = true;
    }
  }

  static Parse(survey) {
    const parsed = Object.assign(new Survey(), survey);
    parsed.endTime = parsed.endTime === null ? null : new Date(parsed.endTime);
    parsed.startTime =
      parsed.startTime === null ? null : new Date(parsed.startTime);

    if (parsed.endTime === null) {
      parsed.endTimeNeeded = false;
      parsed.endTime = null;
    } else if (parsed.endTime.getTime() == new Date(null).getTime()) {
      parsed.endTimeNeeded = false;
      parsed.endTime = null;
    } else {
      parsed.endTimeNeeded = true;
    }
    return parsed;
  }

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
  answers = [];
  endTimeNeeded = false;
}
