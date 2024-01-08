import { v4 as uuidv4 } from "uuid";

class Question {
  innerId = 0;
  constructor() {
    this.innerId = uuidv4();
  }
  /** @type (number) */
  id = 0;
  /** @type (string) */
  title = "";
  /** @type (boolean) */
  isOpen = false;
  answerVariants = [];
}

export default Question;
