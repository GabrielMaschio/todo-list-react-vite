import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";

export default function App() {
	const [tasks, setTasks] = useState(
		JSON.parse(localStorage.getItem("tasks")) || [],
	);

	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}, [tasks]);

	useEffect(() => {
		const getTask = async () => {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/todos?_limit=10",
			);
			const data = await response.json();

			setTasks(data);
		};

		// getTask();
	}, []);

	const onTaskClick = (taskId) => {
		const newTasks = tasks.map((task) => {
			if (task.id === taskId) {
				return { ...task, isCompleted: !task.isCompleted };
			}

			return task;
		});

		setTasks(newTasks);
	};

	const onDeleteTaskClick = (taskId) => {
		const newTasks = tasks.filter((t) => t.id !== taskId);

		setTasks(newTasks);
	};

	const onAddTaskSubmit = (title, description) => {
		const newTask = {
			id: v4(),
			title,
			description,
			isCompleted: false,
		};

		setTasks([...tasks, newTask]);
	};

	return (
		<div className="min-h-screen w-full bg-slate-500 flex justify-center p-6">
			<div className="w-[500px] h-full space-y-4">
				<h1 className="text-slate-100 text-3xl font-bold text-center">
					Gerenciador de Tarefas
				</h1>

				<AddTask onAddTaskSubmit={onAddTaskSubmit} />

				<Tasks
					tasks={tasks}
					onTaskClick={onTaskClick}
					onDeleteTaskClick={onDeleteTaskClick}
				/>
			</div>
		</div>
	);
}
