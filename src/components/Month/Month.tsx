import cx from 'classnames';
import Day from '../Day';
import { daysOfTheWeek, months } from '../../helpers/dateHelper';

export interface MonthProps {
	className?: string,
	month: any,
	year: any,
	endDate: any,
	fullViewDates: any, 
	handleSelect: any,
	startDate: any,
}

export default function Month(props:MonthProps) {
	const { 
		className,
		month,
		year,
		endDate,
		fullViewDates,
		handleSelect,
		startDate,
	} = props;

	return <div className={cx(className)}>
		<div className="navbar">
			<button className="p-4 rounded">{months[month]}</button>
			<button className="p-4 rounded">{year}</button>
		</div>
		

		<div className="daysOfWeek">
			{
				daysOfTheWeek.map((day: string, i: number) => <span 
						className="p-2" 
						key={`${day}-${i}`}
					>
						{day}
					</span>
				)
			}
		</div>


		<div className="days">
			{
				fullViewDates.length > 0 && fullViewDates.map((day:Date) => {

					return <Day 
						date={day} 
						handleSelect={handleSelect}
						isEndDate={day.getTime() === endDate.getTime()}
						isInCurrentMonth={day.getMonth() === month}
						isStartDate={day.getTime() === startDate.getTime()}
						isTheWeekend={day.getDay() === 0 || day.getDay() === 6}
						isWithinRange={day > startDate && day < endDate}
						key={`${day.getMonth()}-${day.getDate()}-${day.getFullYear()}`} 
					/>

				})
			}
		</div>
		
	</div>;
}