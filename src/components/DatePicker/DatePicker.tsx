import cx from 'classnames';
import Month from '../Month';
import { formatDate, getWeekendDates } from '../../helpers/dateHelper';

export interface DatePickerProps {
	className?: string,
	onDateRangeChanged: any,
	onMonthChange: any, 
	onYearChange: any, 
	month:any, 
	year: any, 
	fullViewDates: any,
	startDate: any,
	endDate: any,
	srMessage: string,
	srOnDateRangeChanged: any, 
}


export default function DatePicker(props:DatePickerProps) {
	const { 
		className,
		onDateRangeChanged,
		onMonthChange,
		onYearChange,
		month, 
		year,
		fullViewDates,
		startDate,
		endDate,
		srMessage,
		srOnDateRangeChanged,
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

			srOnDateRangeChanged(`Starting Date: ${formatDate(date)}`);

		} else {
			onDateRangeChanged(
				[
					startDate,
					formatDate(date)
				], 
				[getWeekendDates((new Date(startDate)), date, fullViewDates)]
			);

			srOnDateRangeChanged(`Selected date range from ${startDate} to ${formatDate(date)}`);

		}
	}

	return <div className={cx(className)}>
		<Month 
			month={month} 
			year={year}
			fullViewDates={fullViewDates}
			endDate={(new Date(endDate))}
			handleSelect={handleSelect}
			onMonthChange={onMonthChange}
			onYearChange={onYearChange}
			startDate={(new Date(startDate))}
			srMessage={srMessage}
		/>
	</div>;
}