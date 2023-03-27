export function timeIntegerToString(integer: number, removeSurfix?: boolean) {
  let hours = Math.floor(integer / 60) % 12;
  if (hours == 0 && !removeSurfix) hours = 12;

  const minutes = ("0" + (integer % 60)).slice(-2);

  if (removeSurfix) {
    if (minutes == "00") return hours + " Hr";
    if (hours !== 0) return hours + " Hr " + minutes + " Mins";
    return minutes + " Mins";
  }
  const surfixValue = integer < 720 ? "AM" : "PM";
  return hours + ":" + minutes + " " + surfixValue;
}
