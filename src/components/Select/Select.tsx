import cx from 'classnames';

export interface SelectProps {
	className?: string,
	label: string, 
	options: any, 
	onSelect: any, 
	value: any, 
}

export default function Select(props:SelectProps) {
	const { 
		className,
		label,
		options, 
		onSelect, 
		value,
	} = props
	return <div className={cx(className,'select-input', 'bg-slate-100 focus-within:bg-blue-100 focus-within:outline max-w-fit flex items-center mx-auto mb-4 outline-offset-2 outline-2 outline-blue-500 px-2 px-4 py-2 rounded-md relative w-full')}>
	<select
		name={`select-input-${label}`}
		id={`select-input-${label}`}
		aria-label={label}
		onChange={onSelect}
		className="outline-none appearance-none bg-transparent pr-4" 
		value={value}
	>
		{
			options.map((option:string) => (
				<option 
					value={option}
					key={option}
				>	
					{option}
				</option>
			))
		}
	</select>
	<span 
		className="material-symbols-rounded pointer-events-none absolute right-2" 
		aria-hidden="true"
	>
		expand_more
	</span>
</div>
}