import React, { useState } from "react";
import { Input } from "./InputText";

export default function AddTask({ onAddTaskSubmit }) {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	return (
		<div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
			<Input
				type="text"
				placeholder="Digite o titulo da tarefa"
				value={title}
				setValue={setTitle}
			/>
			<Input
				type="text"
				placeholder="Digite o descrição da tarefa"
				value={description}
				setValue={setDescription}
			/>
			{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
			<button
				onClick={() => {
					if (!title.trim() || !description.trim()) {
						return alert("Preencha todos so campos!");
					}

					onAddTaskSubmit(title, description);
					setTitle("");
					setDescription("");
				}}
				className="bg-slate-500 text-white px-4 py-2 rounded-md"
			>
				Adicionar
			</button>
		</div>
	);
}
