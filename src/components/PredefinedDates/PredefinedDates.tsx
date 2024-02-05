import cx from 'classnames';
import { formatDate, getWeekendDates } from '../../helpers/dateHelper';

export interface PredefinedDatesProps {
	className?: string,
	onPredefinedDatesClicked: any,
	monthDates: any,
	fullViewDates: any
}

export default function PredefinedDates(props:any) {
	const { 
		className,
		onPredefinedDatesClicked,
		monthDates,
		fullViewDates,
	} = props;

	const selectFirstSevenDays = () => {
		let firstSevenDays = monthDates.slice(0, 7);
		onPredefinedDatesClicked({
			startDate: formatDate(firstSevenDays[0]),
			endDate: formatDate(firstSevenDays[6]),
			weekends: getWeekendDates(firstSevenDays[0], firstSevenDays[6], fullViewDates)
		});
	}

	const selectLastSevenDays = () => {
		let lastSevenDays = monthDates.slice(monthDates.length - 7, monthDates.length);
		onPredefinedDatesClicked({
			startDate: formatDate( lastSevenDays[0]),
			endDate: formatDate(lastSevenDays[6]),
			weekends: getWeekendDates(lastSevenDays[0], lastSevenDays[6], fullViewDates)
		});
	}

	return <div className={cx(className)}>

		<div className="p-6 predefined-dates">
			<ul>
				<li>
					<button 
						className="px-4 py-2 bg-slate-100 rounded focus-within:bg-blue-100 focus-within:outline outline-offset-2 outline-2 outline-blue-500"
						onClick={selectFirstSevenDays}
					>First Seven Days</button>
				</li>
				<li>
					<button 
						className="px-4 py-2 bg-slate-100 rounded focus-within:bg-blue-100 focus-within:outline outline-offset-2 outline-2 outline-blue-500"
						onClick={selectLastSevenDays}
					>Last Seven Days</button>
				</li>
			</ul>
		</div>

			
	</div>
}