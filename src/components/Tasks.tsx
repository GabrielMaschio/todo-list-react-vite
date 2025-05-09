import { Check, ChevronRightIcon, DeleteIcon, TrashIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./Buttons";

export default function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
	const navigate = useNavigate();

	const onSeeDetailsClick = (task) => {
		const query = new URLSearchParams();
		query.set("title", task.title);
		query.set("description", task.description);

		navigate(`/task?${query.toString()}`);
	};

	return (
		<div className="h-full">
			<ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
				{tasks.map((task) => (
					<li className="flex gap-2" key={task.id}>
						{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
						<button
							onClick={() => onTaskClick(task.id)}
							className={`bg-slate-400 w-full text-white p-2 rounded-md text-left flex flex-row gap-2 ${task.isCompleted && "line-through"}`}
						>
							{task.isCompleted ? <Check className="text-green-200" /> : ""}
							{task.title}
						</button>

						<Button
							Children={<ChevronRightIcon />}
							onClick={() => onSeeDetailsClick(task)}
						/>

						<Button
							Children={<TrashIcon />}
							onClick={() => onDeleteTaskClick(task.id)}
						/>
					</li>
				))}
			</ul>
		</div>
	);
}
