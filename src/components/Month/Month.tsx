import cx from 'classnames';
import { useEffect, useState } from 'react';
import Day from '../Day';

export interface MonthProps {
	className?: string,
	activeMonth: any,
	activeYear: any,
	endDate: any,
	handleSelect: any,
	startDate: any,
}

export default function Month(props:MonthProps) {
	const { 
		className,
		activeMonth,
		activeYear,
		endDate,
		handleSelect,
		startDate,
	} = props;

	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December', 
	]

	const daysOfTheWeek = [
		'S',
		'M',
		'T',
		'W',
		'T',
		'F',
		'S'
	]

	const [fullMonth, setFullMonth] = useState<Date[]>([]);

	const generate_month = () => {
		const totalDaysInMonth = getTotalDaysInMonth(activeMonth, activeYear);
		const fullMonth = generateFullMonth(activeMonth, activeYear, totalDaysInMonth);
		setFullMonth(fullMonth);
	}

	const getTotalDaysInMonth = (month: number, year: number) => {
		// js date() is weird, 
		// months start at 0, but using .getDate() uses non index of 0
		return new Date(year, (++month), 0).getDate();
	}

	const generateFullMonth = (month: number = 0, year: number = 0, totalDaysInMonth: number = 0) => {
		let first_day_of_month = new Date(year, month, 1),
				last_day_of_month = new Date(year, month + 1, 0);

		let current_month_arr = Array.from({length: totalDaysInMonth}, (_, i) => {
			return new Date(new Date(year, month, i + 1, 0, 0, 0, 0));
		});

		// generate last days of PREV month 
		let extra_before_days = Array.from({length: first_day_of_month.getDay()}, (_, i) => {
			return new Date(new Date(year, month, first_day_of_month.getDate() - i - 1, 0, 0, 0, 0));
		});

		// generate first days of NEXT month
		let extra_after_days = Array.from({length: 6 - last_day_of_month.getDay()}, (_, i) => {
			return new Date(new Date(year, month, last_day_of_month.getDate() + i + 1, 0, 0, 0, 0));
		});

		return [...extra_before_days.reverse(), ...current_month_arr, ...extra_after_days];
	}


	useEffect(() => {
    generate_month()
  }, [])

	return <div className={cx(className)}>
		<div className="navbar">
			<button className="p-4 rounded">{months[activeMonth]}</button>
			<button className="p-4 rounded">{activeYear}</button>
		</div>
		

		<div className="daysOfWeek">
			{
				daysOfTheWeek.map((day, i) => <span 
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
				fullMonth.map((day) => <Day 
					date={day} 
					handleSelect={handleSelect}
					isEndDate={day === endDate}
					isInCurrentMonth={day.getMonth() === activeMonth}
					isStartDate={day === startDate}
					isTheWeekend={day.getDay() === 0 || day.getDay() === 6}
					isWithinRange={day > startDate && day < endDate}
					key={`${day.getMonth()}-${day.getDate()}-${day.getFullYear()}`} 
				/>)
			}
		</div>
		
	</div>;
}