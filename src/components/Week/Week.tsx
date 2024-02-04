import cx from 'classnames';
import Day from '../Day';

export interface WeekProps {
	className?: string,
	// types: string[]
}

export default function Week(props:WeekProps) {
	const { className } = props;
	return <div className={cx(className)}>
		<p>week</p>
		<Day />
		<Day />
		<Day />
		<Day />
		<Day />
		<Day />
		<Day />
	</div>;
}