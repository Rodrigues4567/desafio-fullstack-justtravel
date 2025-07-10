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

    useEffect(() => {
        fetchTasks()
    }, [])

    return (
        <div>
            <div className="flex justify-center items-center flex-col bg-slate-400 w-[840px]">
                <h1 className="font-bold text-[2rem] text-center py-[1.5rem]">To-Do List</h1>

                <div className="mb-[2rem]">
                    <div className="flex justify-center items-center flex-col">
                        <input type="text" id="input" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Digite sua tarefa" autoComplete="off" />
                        <button className="bg-red-500" onClick={addTask}>Adicionar</button>
                    </div>

                    <select id="select">
                        <option value="" disabled selected>Filtrar por status</option>
                        <option>Concluidas</option>
                        <option>Não Concluidas</option>
                    </select>
                </div>

                <ul>
                    {tasks.map((t) => (
                        <li key={t.id}>
                            <Task task={t} />
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    )
}

export default Home
