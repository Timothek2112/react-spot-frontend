class CardInfo {
  /** @type (number) */
  id = 0;
  /** @type (string) */
  name = "";
  /** @type (string) */
  description = "";
  /** @type (string) */
  autor = "";
  /** @type (number) */
  passed = 0;
  /** @type (date) */
  startTime = new Date();
  /** @type (date) */
  endTime = new Date();
  /** @type (string) */
  department = "";
  /** @type (string) */
  group = "";
  /** @type (boolean) */
  active = false;
  /** @type (string) */
  accessCode = "";

  static from(json = {}) {
    return Object.assign(new CardInfo(), json);
  }
}

export default CardInfo;
