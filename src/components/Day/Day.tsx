import cx from 'classnames';

export interface DayProps {
	className?: string,
	date: number,
}

export default function Day(props:DayProps) {
	const { className, date } = props;
	return <div className={cx(className)}>
		<button className='p-4 border-solid border-2  rounded'>
			{date}
		</button>
	</div>;
}