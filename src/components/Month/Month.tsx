import cx from 'classnames';
import Week from '../Week';

export interface MonthProps {
	className?: string,
	// types: string[]
}

export default function Month(props:MonthProps) {
	const { className } = props;
	return <div className={cx(className)}>
		<div className="navbar">
			<button className="p-4 rounded">Month</button>
			<button className="p-4 rounded">Year</button>
		</div>
		<Week />
		<Week />
		<Week />
		<Week />
	</div>;
}