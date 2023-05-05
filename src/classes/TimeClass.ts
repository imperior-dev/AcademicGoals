import { TimeType } from "../types/DataType"

export class TimeClass {
  private value;
  public hr;
  public min;
  public am;
  constructor(time: TimeType) {
    this.value = time;
    this.hr = time.hr;
    this.min = time.min;
    this.am = time.am;
  }
}
