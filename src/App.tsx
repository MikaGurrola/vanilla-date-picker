import { useState } from 'react';
import './App.scss';
import DatePicker from './components/DatePicker';
import { generateMonth, months } from './helpers/dateHelper';
import PredefinedDates from './components/PredefinedDates';

function App() {

  // initial date is todays date
  const today = new Date(),
        month = today.getMonth(),
        year = today.getFullYear(),
        initalCalendarData = generateMonth(month, year);

  generateMonth(month, year);   
        
	const [dateRange, setDateRange] = useState<any>({
		startDate: null,
		endDate: null,
		weekends: []
	});

  const [calendarState, setCalendarState] = useState<any>({
		monthDates: initalCalendarData.monthDates, // days of month
    fullViewDates: initalCalendarData.fullViewDates, // days of month + prev/next month to fill out days in week
    targetDate: today,
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

  const onPredefinedDatesClicked = (data:any) => {
    setDateRange({
      startDate: data.startDate,
      endDate: data.endDate,
      weekends: data.weekends
    });
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
    })

    setDateRange({
      startDate: null,
      endDate: null,
      weekends: []
    })

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
    })

    setDateRange({
      startDate: null,
      endDate: null,
      weekends: []
    })
  }


  return (
    <div className="App">
      <DatePicker 
        onDateRangeChanged={onDateRangeChanged} 
        onMonthChange={onMonthChange}
        onYearChange={onYearChange}
        month={calendarState.month} 
        year={calendarState.year}
        fullViewDates={calendarState.fullViewDates}
        startDate={dateRange.startDate}
        endDate={dateRange.endDate}
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
