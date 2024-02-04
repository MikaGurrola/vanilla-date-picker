import cx from 'classnames';
import Month from '../Month';

export interface DatePickerProps {
	className?: string,
	// types: string[]
}

export default function DatePicker(props:DatePickerProps) {
	const { className } = props;
	return <div className={cx(className)}>
		<h1>Hello I am the date picker</h1>
		<Month />
	</div>;
}