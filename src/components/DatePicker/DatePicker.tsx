import cx from 'classnames';
import Month from '../Month';
import { getWeekendDates } from '../../helpers/dateHelper';

export interface DatePickerProps {
	className?: string,
	endDateString: string,
	fullViewDates: any,
	month:any, 
	onDateRangeChanged: any,
	onMonthChange: any, 
	onYearChange: any, 
	srMessage: string,
	srOnDateRangeChanged: any, 
	startDateString: any,
	year: any, 
}


export default function DatePicker(props:DatePickerProps) {
	const { 
		className,
		endDateString,
		fullViewDates,
		month, 
		onDateRangeChanged,
		onMonthChange,
		onYearChange,
		srMessage,
		srOnDateRangeChanged,
		startDateString,
		year,
	} = props;

	const handleSelect = (day: any) => {

		if(
			!startDateString // no start date 
			|| (startDateString && endDateString) // if already have a start/end date, make a new range
			|| (startDateString > day.dateString) // if date is before already selected start date
		) {

			// set/reset start date
			onDateRangeChanged(
				[
					day.dateString,
					null
				], 
				[]
			);

			srOnDateRangeChanged(`Starting Date: ${day.dateString}`);

		} else {
			onDateRangeChanged(
				[
					startDateString,
					day.dateString
				], 
				[getWeekendDates((new Date(startDateString)), day.dateObj, fullViewDates)]
			);

			srOnDateRangeChanged(`Selected date range from ${startDateString} to ${day.dateString}`);


		}
	}

	return <div className={cx(className)}>
		<Month 
			startDateString={startDateString}
			endDateString={endDateString}
			fullViewDates={fullViewDates}
			handleSelect={handleSelect}
			month={month} 
			onMonthChange={onMonthChange}
			onYearChange={onYearChange}
			srMessage={srMessage}
			year={year}
		/>
	</div>;
}