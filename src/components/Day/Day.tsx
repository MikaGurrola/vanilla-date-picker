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
				p-4 aspect-square disabled:text-slate-400 disabled:cursor-not-allowed"
				${isInCurrentMonth && !isTheWeekend && 'text-slate-900'}
				${!isInCurrentMonth && !isStartDate && !isEndDate && 'text-slate-400'}
				${(isEndDate || isStartDate) && 'bg-blue-700 text-slate-50 rounded'}
				${isWithinRange && !isTheWeekend && 'bg-blue-200 text-slate-900 rounded'}
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