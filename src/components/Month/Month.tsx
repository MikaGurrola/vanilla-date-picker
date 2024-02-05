import cx from 'classnames';
import Day from '../Day';
import { daysOfTheWeek, getYears, months, years } from '../../helpers/dateHelper';
import Select from '../Select';

export interface MonthProps {
	className?: string,
	month: any,
	year: any,
	endDate: any,
	fullViewDates: any, 
	handleSelect: any,
	onMonthChange: any,
	onYearChange: any,
	startDate: any,
	srMessage: string,
}

export default function Month(props:MonthProps) {
	const { 
		className,
		month,
		year,
		endDate,
		fullViewDates,
		handleSelect,
		onMonthChange, 
		onYearChange,
		startDate,
		srMessage,
	} = props;

	return <div className={cx(className, 'p-6')}>

		<div className="sr-only" aria-live="assertive" >
			<p>{srMessage}</p>
		</div>

		<div className="navbar">
			<Select 
				label={'Month'}
				options={months}
				onSelect={onMonthChange}
				value={months[month]}
			/>

			<Select 
				label={'Year'}
				options={getYears()}
				onSelect={onYearChange}
				value={year.toString()}
			/>
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
					// TODO Refactor 
					
					return <Day 
						date={day} 
						handleSelect={handleSelect}
						isEndDate={day.getTime() === endDate.getTime()}
						isInCurrentMonth={day.getMonth() === month}
						isStartDate={day.getTime() === startDate.getTime()}
						isTheWeekend={day.getDay() === 0 || day.getDay() === 6}
						isWithinRange={day.getTime() > startDate.getTime() && day.getTime() < endDate.getTime()}
						key={`${day.getMonth()}-${day.getDate()}-${day.getFullYear()}`} 
					/>

				})
			}
		</div>
		
	</div>;
}