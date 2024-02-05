export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December', 
]

export const daysOfTheWeek = [
  'S',
  'M',
  'T',
  'W',
  'T',
  'F',
  'S'
]

export const getWeekendDates = (startDate: Date, endDate: Date, fullMonth: any) => {
  let weekends:any = [];

  for(let i = 0; i < fullMonth.length; i++) {
    let date = fullMonth[i],
        isWithinRange = date > startDate && date < endDate,
        isTheWeekend = date.getDay() === 0 || date.getDay() === 6;
      
    // if this date is within range and the weekend, push to weekend date
    if( isWithinRange && isTheWeekend) {
      weekends.push(formatDate(date));
    }
  }

  return weekends;
}

export const formatDate = (date: Date) => {
  let day = date.getDate(),
      month = date.getMonth(), // JS date months start at index 0 so increment for returned dates
      year = date.getFullYear();
  
  return `${year}-${month + 1}-${day}`;
}

// all days of current month
// new Date(year, monthIndex, day)
export const generateMonth = (month: number, year: number) => {
  const totalDaysInMonth = new Date(year, (month + 1), 0).getDate(); // supposed to be monthIndex; help


  let firstDayOfMonth = new Date(year, (month), 1),
      lastDayOfMonth = new Date(year, (month + 1), 0),
      currentMonthArr = Array.from({length: totalDaysInMonth}, (_, i) => {
        return new Date(new Date(year, month, i + 1, 0, 0, 0, 0));
      });

  // generate last days of PREV month 
  let extraBeforeDays = Array.from({length: firstDayOfMonth.getDay()}, (_, i) => {
    return new Date(new Date(year, month, firstDayOfMonth.getDate() - i - 1, 0, 0, 0, 0));
  });

  // generate first days of NEXT month
  let extraAfterDays = Array.from({length: 6 - lastDayOfMonth.getDay()}, (_, i) => {
    return new Date(new Date(year, month, lastDayOfMonth.getDate() + i + 1, 0, 0, 0, 0));
  });

  return {
    monthDates: currentMonthArr,
    fullViewDates: [...extraBeforeDays.reverse(), ...currentMonthArr, ...extraAfterDays]
  }

}