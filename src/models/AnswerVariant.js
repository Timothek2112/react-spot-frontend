import { v4 as uuidv4 } from "uuid";

export class AnswerVariant {
  constructor() {
    this.innerId = uuidv4();
  }

  innerId = 0;
  id = 0;
  title = "";
}
