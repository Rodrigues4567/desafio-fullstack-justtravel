import { FaCheck } from "react-icons/fa6";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { useState } from "react";

function Task({ task, onToggleComplete, onUpdate, onDelete }) {

    // Estado local para saber se está editando e para armazenar o novo título
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(task.title);

    // Habilita modo de edição do título
    function handleEdit() {
        setIsEditing(true);
    }

    // Salva o novo título e desativa modo de edição
    function handleSave() {
        if (newTitle.trim() === "") return;
        onUpdate(task.id, newTitle);
        setIsEditing(false);
    }

    return (
        <div className="flex justify-between items-center p-[5px] pl-[8px] rounded-[7px] border border-[#cecece] bg-[#fff]">

            <div>
                {isEditing ? (
                    // Input para editar o título da tarefa
                    <input 
                        className="p-1 rounded-[5px] mobile:text-[14px] mobile:w-[150px]" 
                        type="text" 
                        value={newTitle} 
                        onChange={(e) => setNewTitle(e.target.value)} onKeyDown={(e) => {
                            if (e.key === 'Enter') handleSave()
                        }}
                        autoFocus
                    />
                ) : (
                    // Exibe o título com linha cortada se concluída
                    <span className={`${task.completed ? "line-through text-[#a4a8ac]" : ""} mobile:text-[14px]`}>
                        {task.title}
                    </span>
                )}
            </div>

            <div className="flex justify-center items-center gap-[10px]">
                {/* Botão para alternar conclusão */}
                <FaCheck onClick={() => onToggleComplete(task.id, task.completed)} className="text-[2.1rem] p-[8px] rounded-[5px] cursor-pointer bg-[#6D0FF2] text-[#F2F2F2]" />

                {/* Botão salvar ou entrar no modo edição */}
                {isEditing ? (
                    <button className="text-[1rem] p-[7px] py-[4px] rounded-[5px] cursor-pointer bg-green-600 text-white" onClick={handleSave}>
                        Salvar
                    </button>
                ) : (
                    <FaRegEdit onClick={handleEdit} className="text-[2.1rem] p-[8px] rounded-[5px] cursor-pointer bg-[#6D0FF2] text-[#F2F2F2]" />
                )}

                {/* Botão para deletar */}
                <FaRegTrashAlt onClick={() => onDelete(task.id)} className="text-[2.1rem] p-[8px] rounded-[5px] cursor-pointer bg-[#6D0FF2] text-[#F2F2F2]" />
            </div>
            
        </div>
    )
}

export default Task
