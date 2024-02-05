import cx from 'classnames';
import { months } from '../../helpers/dateHelper';
// import { MouseEventHandler } from 'react';

export interface DayProps {
	className?: string,
	// date: Date, 
	day: any,
	handleSelect: any, 
	// isEndDate: boolean,
	// isInCurrentMonth: boolean,
	// isStartDate: boolean, 
	// isTheWeekend: boolean,
	// isWithinRange: boolean,
	startDate: any
	endDate: any,
	month: any,
}

export default function Day(props:DayProps) {
	const { 
		className, 
		// date, 
		day,
		handleSelect,
		// isEndDate,
		// isInCurrentMonth, 
		// isStartDate, 
		// isTheWeekend,
		// isWithinRange, 


		startDate, 
		endDate,
		month
	} = props;

	// console.log(`day month : ${day.monthString}  currentMonth: ${month}`)

	return <div className={cx(className)}>
		<button 
			aria-label={`${day.monthString} of ${day.monthString}`}
			// className={`
			// 	aspect-square disabled:cursor-not-allowed rounded p-4
			// 	focus-within:bg-blue-100 focus-within:outline outline-offset-2 outline-2 outline-blue-500
			// 	${isInCurrentMonth ? 'isInCurrentMonth' : ''}
			// 	${isStartDate ? 'isStartDate' : ''}
			// 	${isEndDate ? 'isEndDate' : ''}
			// 	${isWithinRange ? 'isWithinRange' : ''}
			// `}
			className={`
				aspect-square disabled:cursor-not-allowed rounded p-4
				focus-within:bg-blue-100 focus-within:outline outline-offset-2 outline-2 outline-blue-500
				${day.monthString === month ? 'isInCurrentMonth' : ''}
				${day.day === startDate.getDate() ? 'isStartDate' : ''}
				${day.day === endDate.getDate() ? 'isEndDate' : ''}
				${day.day > startDate.getDate() && day.day < endDate.getDate() ? 'isWithinRange' : ''}
			`}
			onClick={() => {
				// handleSelect(date)
				handleSelect(day)
			} }
			disabled={day.weekDay === 0 || day.weekDay === 6}
		>
			{/* {date.getDate()} */}
			{day.day}
		</button>
	</div>;
}