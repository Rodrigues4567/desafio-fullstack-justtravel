import { useEffect, useState } from "react"
import axios from 'axios'
import Task from "../../components/Task"

function Home() {

    // Estado para armazenar a lista de tarefas vinda da API
    const [tasks, setTasks] = useState([])

    // Estado para controlar o input de nova tarefa
    const [input, setInput] = useState("")

    // Estado para filtrar as tarefas por status
    const [filter, setFilter] = useState("")

    useEffect(() => {
        fetchTasks()
    }, [])

    // Função para buscar as tarefas do backend
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

    // Função para adicionar uma nova tarefa
    async function addTask() {
        if (input.trim() === "") return;

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

    // Função para alternar o status (completa / não completa)
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

    // Função para atualizar o título de uma tarefa
    async function updateTask(id, newTitle) {
        try {
            await axios.put(`http://127.0.0.1:5000/tasks/${id}`, {
                title: newTitle
            })
            fetchTasks()
        }
        catch(err) {
            console.log("Erro ao atualizar tarefa:", err)
        }
    }

    // Função para deletar uma tarefa
    async function deleteTask(id) {
        try {
            await axios.delete(`http://127.0.0.1:5000/tasks/${id}`)
            fetchTasks()
        }
        catch(err) {
            console.log("Erro ao atualizar tarefa:", err)
        }
    }

    // Filtragem dinâmica baseada no estado do filtro selecionado
    const filteredTasks = tasks.filter(t => {
        if (filter === "concluidas") return t.completed;
        if (filter === "nao-concluidas") return !t.completed;
        return true;
    })

    return (
        <div>
            <div className="flex flex-col bg-[#F2F2F2] w-[840px] py-[1rem] px-[6rem] tablet:w-screen tablet:px-[15px]">

                <h1 className="font-bold text-[2rem] text-center py-[1.5rem]">To-Do List</h1>

                <div className="flex-col mb-[2rem] w-full">
                    {/* Input para digitar nova tarefa e botão para adicionar */}
                    <div className="flex justify-center items-center gap-[11px] mb-[12px]">
                        <input className="w-full p-[10px] shadow rounded-[8px] mobile:text-[14px]" type="text" id="input" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Digite sua tarefa" autoComplete="off" />

                        <button className="bg-[#6D0FF2] text-[#fff] p-[10px] rounded-[8px] mobile:text-[14px]" onClick={addTask}>Adicionar</button>
                    </div>

                    {/* Select para filtrar tarefas */}
                    <select className="border border-[#cecece]" id="select" value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="" disabled selected>Filtrar por status</option>
                        <option value="concluidas">Concluidas</option>
                        <option value="nao-concluidas">Não Concluidas</option>
                        <option value="exibir-todas">Exibir Todas</option>
                    </select>
                </div>

                {/* Lista de tarefas */}
                <ul className="flex flex-col gap-[12px]">
                    {filteredTasks.map((t) => (
                        <li key={t.id}>
                            <Task task={t} onToggleComplete={toggleComplete} onUpdate={updateTask} onDelete={deleteTask} />
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    )
}

export default Home
