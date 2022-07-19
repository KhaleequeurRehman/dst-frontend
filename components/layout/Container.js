export default function Container({id, className, children}) {
	return (
		<div className={className} id={id}>
			{children}
		</div>
	)
}