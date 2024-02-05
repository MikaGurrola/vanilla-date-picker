import cx from 'classnames';
import { DayInterface } from '../../helpers/dateHelper';

export interface DayProps {
	className?: string,
	day: DayInterface,
	endDateString: string,
	handleSelect: any, // what type are func handlers?
	month: string,
	startDateString: string
}

export default function Day(props:DayProps) {
	const { 
		className, 
		day,
		endDateString,
		handleSelect,
		month,
		startDateString, 
	} = props;

	return <div className={cx(className)}>
		<button 
			aria-label={day.dateString}
			className={`
				aspect-square disabled:cursor-not-allowed rounded p-4
				focus-within:bg-blue-100 focus-within:outline outline-offset-2 outline-2 outline-blue-500
				${day.monthString === month ? 'isInCurrentMonth' : ''}
				${day.dateString === startDateString ? 'isStartDate' : ''}
				${day.dateString === endDateString ? 'isEndDate' : ''}
				${day.dateString > startDateString && day.dateString < endDateString? 'isWithinRange' : ''}
			`}
			onClick={() => handleSelect(day) }
			disabled={day.weekDay === 0 || day.weekDay === 6}
		>
			{day.day}
		</button>
	</div>;
}