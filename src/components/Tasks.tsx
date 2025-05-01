import { Check, ChevronRightIcon, DeleteIcon, TrashIcon } from "lucide-react";
import React from "react";

export default function Tasks({tasks, onTaskClick, onDeleteTaskClick}) {
    return (
        <div>
            <ul className="space-y-4 p-6 bg-slate-100 rounded-md shadow">
                {tasks.map((task) => (
                    <li className="flex gap-2" key={task.id}>
                        <button
                            onClick={() => onTaskClick(task.id)}
                            className={`bg-slate-400 w-full text-white p-2 rounded-md text-left flex flex-row gap-2 ${task.isCompleted && "line-through"}`}
                        >
                            {task.isCompleted ? <Check className="text-green-200" /> : ""}
                            {task.title}
                        </button>
                        <button className="  bg-slate-400 text-white p-2 rounded-md">
                            <ChevronRightIcon />
                        </button>
                        <button
                            onClick={() => onDeleteTaskClick(task.id)}
                            className="bg-slate-400 text-white p-2 rounded-md"
                        >
                            <TrashIcon />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}