import { useState } from 'react';
import './App.scss';
import DatePicker from './components/DatePicker';
import { generateMonth, months } from './helpers/dateHelper';
import PredefinedDates from './components/PredefinedDates';

function App() {
  // initial date is todays date
  let initialDate = new Date(),
      initialDateString = initialDate.toISOString().split('T')[0],
      parts = initialDateString.split('-'),
      year = parts[0],
      month = (parseInt(parts[1]) - 1),
      initalCalendarData = generateMonth(month, parseInt(year));

	const [srMessage, setSrMessage] = useState<string>('Select a start and end date.');

  const [dateRange, setDateRange] = useState<any>({
		startDate: null,
		endDate: null,
		weekends: []
	});

  const [calendarState, setCalendarState] = useState<any>({
    monthDates: initalCalendarData.monthDates, // days of month
    fullViewDates: initalCalendarData.fullViewDates, // days of month + prev/next month to fill out days in week
    targetDate: initialDate,
    month,
    year
	});

  const onDateRangeChanged = (selectedDates: any, weekendDates: any) => {
    setDateRange({
      startDate: selectedDates[0],
      endDate: selectedDates[1],
      weekends: weekendDates
    });
  }

  const srOnDateRangeChanged = (message:string) => {
    setSrMessage(message);
  }

  const onPredefinedDatesClicked = (data:any) => {
    setDateRange({
      startDate: data.startDate,
      endDate: data.endDate,
      weekends: data.weekends
    });

    setSrMessage(`Selected pre-defined dates: ${data.startDate} thru ${data.endDate}`);
  }

  const onMonthChange = (e:any) => {
    let newMonth = months.indexOf(e.target.value);
    let newCalendar = generateMonth(newMonth, calendarState.year);
    setCalendarState({
      monthDates: newCalendar.monthDates, // days of month
      fullViewDates: newCalendar.fullViewDates, // days of month + prev/next month to fill out days in week
      targetDate: newCalendar.monthDates[0],
      month: newMonth, 
      year
    });

    setDateRange({
      startDate: null,
      endDate: null,
      weekends: []
    });

    setSrMessage(`${months[newMonth]} ${calendarState.year}, no dates selected`);

  }

  const onYearChange = (e:any) => {
    let newYear = e.target.value;
    let newCalendar = generateMonth(calendarState.month, newYear);
    setCalendarState({
      monthDates: newCalendar.monthDates, // days of month
      fullViewDates: newCalendar.fullViewDates, // days of month + prev/next month to fill out days in week
      targetDate: newCalendar.monthDates[0],
      month: calendarState.month, 
      year: newYear
    });

    setDateRange({
      startDate: null,
      endDate: null,
      weekends: []
    });

    setSrMessage(`${months[calendarState.month]} ${newYear}, no dates selected.`);
  }

  return (
    <div className="App">
      <DatePicker 
        endDateString={dateRange.endDate}
        fullViewDates={calendarState.fullViewDates}
        month={months[calendarState.month]} 
        onDateRangeChanged={onDateRangeChanged} 
        onMonthChange={onMonthChange}
        onYearChange={onYearChange}
        srMessage={srMessage}
        srOnDateRangeChanged={srOnDateRangeChanged}
        startDateString={dateRange.startDate}
        year={calendarState.year}
      />


      <PredefinedDates 
        	onPredefinedDatesClicked={onPredefinedDatesClicked}
          monthDates={calendarState.monthDates}
          fullViewDates={calendarState.fullViewDates}
      />


    </div>

  );
}

export default App;
