export const Input = ({ type, placeholder, value, setValue }) => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md bg-white"
			value={value}
			onChange={(event) => setValue(event.target.value)}
		/>
	);
};
