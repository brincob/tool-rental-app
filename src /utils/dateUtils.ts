export function isWeekend(date: Date): boolean {
  const day = date.getDay();
  return day === 0 || day === 6; // Sunday or Saturday
}

export function isHoliday(date: Date): boolean {
  const month = date.getMonth();
  const day = date.getDate();
  const dayOfWeek = date.getDay();

  // Independence Day (July 4th, or observed on the closest weekday)
  if (month === 6 && (day === 4 || (day === 3 && dayOfWeek === 5) || (day === 5 && dayOfWeek === 1))) {
    return true;
  }
  // Labor Day (first Monday in September)
  if (month === 8 && dayOfWeek === 1 && day <= 7) {
    return true;
  }

  return false;
}
