import cx from 'classnames';
import Day from '../Day';

export interface WeekProps {
	className?: string,
	// types: string[]
}

export default function Week(props:WeekProps) {
	const { className } = props;
	return <div className={cx(className)}>
		<Day date={1} />
		<Day date={2} />
		<Day date={3} />
		<Day date={4} />
		<Day date={5} />
		<Day date={6} />
		<Day date={7} />
	</div>;
}