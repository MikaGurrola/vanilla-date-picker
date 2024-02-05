import cx from 'classnames';
import Month from '../Month';
import { useEffect, useState } from 'react';

export interface DatePickerProps {
	className?: string,
	onDateRangeChanged: any,
}


export default function DatePicker(props:DatePickerProps) {
	const { 
		className,
		onDateRangeChanged,
	 } = props;

	let today = new Date(),
			month = today.getMonth(),
			year = today.getFullYear();

	const [dateRange, setDateRange] = useState<any>({
		startDate: null,
		endDate: null,
		weekends: []
	});


	const handleSelect = (date: Date) => {
		if(
			!dateRange.startDate // no start date 
			|| (dateRange.startDate && dateRange.endDate) // if already have a start/end date, make a new range
			|| (dateRange.startDate > date) // if date is before already selected start date
		) {
			setDateRange({
				...dateRange,
				startDate: date,
				endDate: null,
			});
		} else {
			setDateRange({
				...dateRange,
				endDate: date,
			});
		}

	}

	useEffect(() => {
		console.log('dateRange', dateRange);
		onDateRangeChanged([dateRange.startDate, dateRange.endDate], [dateRange.weekends])
	}, [dateRange])

	return <div className={cx(className)}>
		<Month 
			activeMonth={month} 
			activeYear={year} 
			endDate={dateRange.endDate}
			handleSelect={handleSelect}
			startDate={dateRange.startDate}
		/>
	</div>;
}