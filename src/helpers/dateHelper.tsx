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

export const years = [
  '2020',
  '2021',
  '2022',
  '2023',
  '2024',
  '2025',
  '2026',
];

export interface DayInterface {
  dateObj: Date,
  day: number,
  month: number,
  year: string,
  weekDay: number,
  dateString: string,
  monthString: string
}

export const getYears = () => {
  const year =  new Date().getFullYear();

  let prevYears = Array.from({length: 3}, (_, i) => {
    return new Date(new Date((year - i - 1), 1, 1, 0, 0, 0, 0)).getFullYear().toString();
  });
  let nextYears = Array.from({length: 3}, (_, i) => {
    return new Date(new Date((year + i + 1), 1, 1, 0, 0, 0, 0)).getFullYear().toString();
  });


  return [ ...prevYears.reverse(), year.toString(), ...nextYears];
}

export const daysOfTheWeek = [
  'S',
  'M',
  'T',
  'W',
  'T',
  'F',
  'S'
]

export const getWeekendDates = (startDate: Date, endDate: Date, fullMonth: DayInterface[]) => {
  let weekends:any = [];

  // console.log('startDate', startDate)
  // console.log('endDate', endDate)
  // console.log('fullMonth', fullMonth)

  for(let i = 0; i < fullMonth.length; i++) {
    let date = fullMonth[i].dateObj,
        isWithinRange = date > startDate && date < endDate,
        isTheWeekend = date.getDay() === 0 || date.getDay() === 6;
      
    // if this date is within range and the weekend, push to weekend date
    if( isWithinRange && isTheWeekend) {
      weekends.push(stringifyDate(date));
    }
  }

  return weekends;
}

export const stringifyDate = (date: Date) => {
  return date.toISOString().split('T')[0];
}


// all days of current month
// new Date(year, monthIndex, day)
export const generateMonth = (month: number, year: number) => {
  const totalDaysInMonth = new Date(year, (month + 1), 0).getDate(); // supposed to be monthIndex; help

  let _formatDate = (date: Date): DayInterface => {
    let dateString = date.toISOString().split('T')[0], 
        parts = dateString.split('-'),
        year = parts[0],
        month = parseInt(parts[1]),
        day = parseInt(parts[2]);

    // all these properties are for ease of use for comparison and checks in UI 
    // spend the processing here rather than in view 
    return {
      dateObj: date,
      day,
      month,
      year,
      weekDay: date.getDay(),
      dateString,
      monthString: months[month-1]
    }
  }

  const firstDayOfMonth = new Date(year, (month), 1),
      lastDayOfMonth = new Date(year, (month + 1), 0),
      currentMonthArr = Array.from({length: totalDaysInMonth}, (_, i) => {
        return _formatDate(new Date(new Date(year, month, i + 1, 0, 0, 0, 0)));
      });

  // generate last days of PREV month 
  const extraBeforeDays = Array.from({length: firstDayOfMonth.getDay()}, (_, i) => {
    return _formatDate(new Date(new Date(year, month, firstDayOfMonth.getDate() - i - 1, 0, 0, 0, 0)));
  });

  // generate first days of NEXT month
  const extraAfterDays = Array.from({length: 6 - lastDayOfMonth.getDay()}, (_, i) => {
    return _formatDate(new Date(new Date(year, month, lastDayOfMonth.getDate() + i + 1, 0, 0, 0, 0)));
  });


  return {
    monthDates: currentMonthArr,
    fullViewDates: [...extraBeforeDays.reverse(), ...currentMonthArr, ...extraAfterDays]
  }

}
