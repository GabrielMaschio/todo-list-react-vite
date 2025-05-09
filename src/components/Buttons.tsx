export const Button = ({ Children, onClick }) => {
	return (
		// biome-ignore lint/a11y/useButtonType: <explanation>
		<button
			onClick={onClick}
			className="bg-slate-400 text-white p-2 rounded-md"
		>
			{Children}
		</button>
	);
};
