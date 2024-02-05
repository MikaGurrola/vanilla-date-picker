import cx from 'classnames';
import Month from '../Month';
import { formatDate, getWeekendDates } from '../../helpers/dateHelper';

export interface DatePickerProps {
	className?: string,
	onDateRangeChanged: any,
	month:any, 
	year: any, 
	fullViewDates: any,
	startDate: any,
	endDate: any,
}


export default function DatePicker(props:DatePickerProps) {
	const { 
		className,
		onDateRangeChanged,
		month, 
		year,
		fullViewDates,
		startDate,
		endDate,
	} = props;

	const handleSelect = (date: Date) => {
		if(
			!startDate // no start date 
			|| (startDate && endDate) // if already have a start/end date, make a new range
			|| ((new Date(startDate)).getTime() > date.getTime()) // if date is before already selected start date
		) {
			// set/reset start date
			onDateRangeChanged(
				[
					formatDate(date),
					null
				], 
				[]
			);

		} else {

			// set end date
			// setDateRange({
			// 	...dateRange,
			// 	endDate: date,
			// 	weekends: getWeekendDates(dateRange.startDate, date, fullViewDates)
			// });

			onDateRangeChanged(
				[
					startDate,
					formatDate(date)
				], 
				[getWeekendDates((new Date(startDate)), date, fullViewDates)]
			);

		}
	}

	return <div className={cx(className)}>
		<Month 
			month={month} 
			year={year}
			fullViewDates={fullViewDates}
			endDate={(new Date(endDate))}
			handleSelect={handleSelect}
			startDate={(new Date(startDate))}
		/>



	</div>;
}