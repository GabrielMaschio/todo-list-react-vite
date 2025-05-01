import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

export default function App() {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Comprar mantimentos',
      description: 'Leite, pão, ovos e café',
      isCompleted: false
    },
    {
      id: '2',
      title: 'Estudar React',
      description: 'Revisar hooks e criar um projeto prático',
      isCompleted: false
    },
    {
      id: '3',
      title: 'Fazer exercício',
      description: 'Caminhada de 30 minutos no parque',
      isCompleted: false
    }
  ]);

  const onTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    })

    setTasks(newTasks);
  }

  const onDeleteTaskClick = (taskId) => {
    const newTasks = tasks.filter((t) => t.id !== taskId)

    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-slate-100 text-3xl font-bold text-center">Gerenciador de Tarefas</h1>

        <AddTask />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick} />
      </div>
    </div>
  )
}