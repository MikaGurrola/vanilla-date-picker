import cx from 'classnames';
import Day from '../Day';
import { DayInterface, daysOfTheWeek, getYears, months } from '../../helpers/dateHelper';
import Select from '../Select';

export interface MonthProps {
	className?: string,
	endDateString: string,
	fullViewDates: DayInterface[], 
	handleSelect: any,
	month: string,
	onMonthChange: any,
	onYearChange: any,
	srMessage: string,
	startDateString: string,
	year: string,
}

export default function Month(props:MonthProps) {
	const { 
		className,
		endDateString,
		fullViewDates,
		handleSelect,
		month,
		onMonthChange, 
		onYearChange,
		srMessage,
		startDateString,
		year,
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
				value={month}
			/>

			<Select 
				label={'Year'}
				options={getYears()}
				onSelect={onYearChange}
				value={year}
			/>
		</div>
		

		<div className="daysOfWeek">
			{
				daysOfTheWeek.map((day: string, i: number) => <span 
						key={`${day}-${i}`}
						className="p-2" 
					>
						{day}
					</span>
				)
			}
		</div>


		<div className="days">
			{
				fullViewDates.length > 0 && fullViewDates.map((day:any) => {

					return <Day 
						key={`${day.dateString}`} 

						day={day} 
						handleSelect={handleSelect}
						startDateString={startDateString}
						endDateString={endDateString}
						month={month}
					/>

				})
			}
		</div>
		
	</div>;
}