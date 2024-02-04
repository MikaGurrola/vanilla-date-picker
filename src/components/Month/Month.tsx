import cx from 'classnames';
import Week from '../Week';

export interface MonthProps {
	className?: string,
	// types: string[]
}

export default function Month(props:MonthProps) {
	const { className } = props;
	return <div className={cx(className)}>
		<p>Month</p>
		<Week />
		<Week />
		<Week />
		<Week />
	</div>;
}