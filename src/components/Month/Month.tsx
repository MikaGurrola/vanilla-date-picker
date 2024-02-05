import cx from 'classnames';
import { useEffect, useState } from 'react';
import Day from '../Day';

export interface MonthProps {
	className?: string,
	activeMonth: any,
	activeYear: any,
}

export default function Month(props:MonthProps) {
	const { 
		className,
		activeMonth,
		activeYear 
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

	const [full_month, set_full_month] = useState<Date[]>([]);

	const generate_month = () => {
		const total_days_in_month = get_total_days_in_month(activeMonth, activeYear);
		const full_month = generate_full_month(activeMonth, activeYear, total_days_in_month);
		set_full_month(full_month);
	}

	const get_total_days_in_month = (month: number, year: number) => {
		// js date() is weird, 
		// months start at 0, but using .getDate() uses non index of 0
		return new Date(year, (++month), 0).getDate();
	}

	const generate_full_month = (month: number = 0, year: number = 0, total_days_in_month: number = 0) => {
		let first_day_of_month = new Date(year, month, 1),
				last_day_of_month = new Date(year, month + 1, 0);

		let current_month_arr = Array.from({length: total_days_in_month}, (_, i) => {
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

	const handleSelect = (date: Date) => {
		console.log('clicked a date', date);
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
				full_month.map((day, i) => <Day 
					date={day} 
					key={`${day.getMonth()}-${day.getDate()}-${day.getFullYear()}`} 
					isInCurrentMonth={day.getMonth() === activeMonth}
					handleSelect={handleSelect}
				/>)
			}
		</div>
		
	</div>;
}