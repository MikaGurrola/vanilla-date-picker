import cx from 'classnames';
import { MouseEventHandler } from 'react';

export interface DayProps {
	className?: string,
	date: Date, 
	handleSelect: any, 
	isEndDate: boolean,
	isInCurrentMonth: boolean,
	isStartDate: boolean, 
	isTheWeekend: boolean,
	isWithinRange: boolean,
}

export default function Day(props:DayProps) {
	const { 
		className, 
		date, 
		handleSelect,
		isEndDate,
		isInCurrentMonth, 
		isStartDate, 
		isTheWeekend,
		isWithinRange, 
	} = props;

	return <div className={cx(className)}>
		<button 
			className={`
				p-4 aspect-square disabled:cursor-not-allowed
				${isInCurrentMonth ? 'isInCurrentMonth' : ''}
				${isStartDate ? 'isStartDate' : ''}
				${isEndDate ? 'isEndDate' : ''}
				${isWithinRange ? 'isWithinRange' : ''}
			`}
			onClick={() => {
				handleSelect(date)
			} }
			disabled={isTheWeekend}
		>
			{date.getDate()}
		</button>
	</div>;
}