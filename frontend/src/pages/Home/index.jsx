import { useEffect, useState } from "react"
import axios from 'axios'
import Task from "../../components/Task"

function Home() {

    const [tasks, setTasks] = useState([])
    const [input, setInput] = useState("")

    async function fetchTasks() {
        try {
            const res = await axios.get('http://127.0.0.1:5000/tasks')
            setTasks(res.data)
            console.log(res.data)
        }
        catch(err) {
            console.log("Erro ao buscar tarefas:", err)
        }
    }

    async function addTask() {
        if (input.trim() == "") return;

        try {
            await axios.post('http://127.0.0.1:5000/tasks', {
                title: input,
                completed: false
            });
            setInput("")
            fetchTasks()
        }
        catch(err) {
            console.log("Erro ao adicionar tarefa:", err)
        }
    }

    async function toggleComplete(id, completed) {
        try {
            await axios.put(`http://127.0.0.1:5000/tasks/${id}`, {
                completed: !completed
            })
            fetchTasks()
        }
        catch(err) {
            console.log("Erro ao atualizar tarefa:", err)
        }
    }

    async function deleteTask(id) {
        try {
            await axios.delete(`http://127.0.0.1:5000/tasks/${id}`)
            fetchTasks()
        }
        catch(err) {
            console.log("Erro ao atualizar tarefa:", err)
        }
    }

    useEffect(() => {
        fetchTasks()
    }, [])

    return (
        <div>
            <div className="flex flex-col bg-slate-400 w-[840px] py-[1rem] px-[6rem]">
                <h1 className="font-bold text-[2rem] text-center py-[1.5rem]">To-Do List</h1>

                <div className="flex-col mb-[2rem] w-full">
                    <div className="flex justify-center items-center gap-[11px] mb-[12px]">
                        <input className="w-full p-[10px] rounded-[8px]" type="text" id="input" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Digite sua tarefa" autoComplete="off" />
                        <button className="bg-red-500 p-[10px] rounded-[8px]" onClick={addTask}>Adicionar</button>
                    </div>

                    <select id="select">
                        <option value="" disabled selected>Filtrar por status</option>
                        <option>Concluidas</option>
                        <option>Não Concluidas</option>
                    </select>
                </div>

                <ul className="flex flex-col gap-[12px]">
                    {tasks.map((t) => (
                        <li key={t.id}>
                            <Task task={t} onToggleComplete={toggleComplete} onDelete={deleteTask} />
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    )
}

export default Home
