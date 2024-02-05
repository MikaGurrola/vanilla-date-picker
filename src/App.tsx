import { useEffect, useState } from 'react';
import './App.scss';
import DatePicker from './components/DatePicker';
import { generateMonth } from './helpers/dateHelper';
import PredefinedDates from './components/PredefinedDates';

function App() {

  // initial date is todays date
  const today = new Date(),
        month = today.getMonth(),
        year = today.getFullYear(),
        initalCalendarData = generateMonth(month, year);
        
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


  useEffect(() => {
    console.log(generateMonth(month, year));
  }, [])



  const onPredefinedDatesClicked = (data:any) => {
    console.log('data', data)
    setDateRange({
      startDate: data.startDate,
      endDate: data.endDate,
      weekends: data.weekends
    });
  }


  return (
    <div className="App">
      <DatePicker 
        onDateRangeChanged={onDateRangeChanged} 
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
