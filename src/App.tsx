import './App.scss';
import DatePicker from './components/DatePicker';

function App() {

  const onDateRangeChanged = (selectedDates: any, weekendDates: any) => {
    console.log('selectedDates', selectedDates);
    console.log('weekendDates', weekendDates);
  }

  return (
    <div className="App">
      <DatePicker onDateRangeChanged={onDateRangeChanged} />
    </div>
  );
}

export default App;
