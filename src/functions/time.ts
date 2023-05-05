import { TimeType } from "../types/DataType"

export function convertTimeToMinutes(time: TimeType) {
  let hours = Number(time.hr);
  if (time.am && hours === 12) {
    hours = 0; // midnight
  } else if (!time.am && hours !== 12) {
    hours += 12; // convert to 24-hour clock
  }
  return hours * 60 + Number(time.min);
}

export function convertMinutesToTime(minutes: number): TimeType {
  const hours = Math.floor(minutes / 60) % 12 || 12;
  const am = Math.floor(minutes / 720) % 2 === 0;
  const min = minutes % 60;

  return { hr: hours.toString(), min: min.toString(), am };
}
