import cx from 'classnames';
import Month from '../Month';
import { useEffect } from 'react';

export interface DatePickerProps {
	className?: string,
	// types: string[]
}


export default function DatePicker(props:DatePickerProps) {
	const { className } = props;

	let today = new Date(),
			day = today.getDate(),
			month = today.getMonth(),
			year = today.getFullYear();


	// const months = [
	// 	'January',
	// 	'February',
	// 	'March',
	// 	'April',
	// 	'May',
	// 	'June',
	// 	'July',
	// 	'August',
	// 	'September',
	// 	'October',
	// 	'November',
	// 	'December', 
	// ]

	// const generateMonth = () => {
	// 	console.log('days: ', daysInMonth(month, year))
	// }

	// const daysInMonth = (month: number, year: number) => {
	// 	// js date() is weird, 
	// 	// months start at 0, but using .getDate() uses non index of 0
	// 	return new Date(year, (++month), 0).getDate();
	// }

	// useEffect(() => {
  //   generateMonth()
  // }, [])

	return <div className={cx(className)}>
		<h1>Hello I am the date picker</h1>
		<Month activeMonth={month} activeYear={year} />
	</div>;
}