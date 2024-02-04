import cx from 'classnames';

export interface DayProps {
	className?: string,
	// types: string[]
}

export default function Day(props:DayProps) {
	const { className } = props;
	return <div className={cx(className)}>
		<p>day</p>
	</div>;
}