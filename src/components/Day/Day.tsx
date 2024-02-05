import cx from 'classnames';
import { MouseEventHandler } from 'react';

export interface DayProps {
	className?: string,
	date: Date, 
	isInCurrentMonth: boolean,
	handleSelect: any, 
}

export default function Day(props:DayProps) {
	const { 
		className, 
		date, 
		isInCurrentMonth, 
		handleSelect
	} = props;
	return <div className={cx(className)}>
		<button 
			className={`
				p-4  rounded aspect-square 
				${isInCurrentMonth && 'bg-slate-50'}
			`}
			onClick={() => {
				handleSelect(date)
			} }
		>
			{date.getDate()}
		</button>
	</div>;
}