import cx from 'classnames';
import { stringifyDate, getWeekendDates, DayInterface } from '../../helpers/dateHelper';

export interface PredefinedDatesProps {
	className?: string,
	fullViewDates: DayInterface[]
	monthDates: DayInterface[],
	onPredefinedDatesClicked: any,
}

export default function PredefinedDates(props:any) {
	const { 
		className,
		fullViewDates,
		monthDates,
		onPredefinedDatesClicked,
	} = props;

	const selectFirstSevenDays = () => {
		let firstSevenDays = monthDates.slice(0, 7);
		onPredefinedDatesClicked({
			startDate: stringifyDate(firstSevenDays[0].dateObj),
			endDate: stringifyDate(firstSevenDays[6].dateObj),
			weekends: getWeekendDates(firstSevenDays[0].dateObj, firstSevenDays[6].dateObj, fullViewDates)
		});
	}

	const selectLastSevenDays = () => {
		let lastSevenDays = monthDates.slice(monthDates.length - 7, monthDates.length);
		onPredefinedDatesClicked({
			startDate: stringifyDate( lastSevenDays[0].dateObj),
			endDate: stringifyDate(lastSevenDays[6].dateObj),
			weekends: getWeekendDates(lastSevenDays[0].dateObj, lastSevenDays[6].dateObj, fullViewDates)
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