import { FaCheck } from "react-icons/fa6";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { useState } from "react";

function Task({ task, onToggleComplete, onUpdate, onDelete }) {

    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(task.title);

    function handleEdit() {
        setIsEditing(true);
    }

    function handleSave() {
        if (newTitle.trim() === "") return;
        onUpdate(task.id, newTitle);
        setIsEditing(false);
    }

    return (
        <div className="flex justify-between items-center p-[5px] pl-[8px] rounded-[7px] border border-[#cecece] bg-[#fff]">

            <div>
                {isEditing ? (
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
                    <span className={`${task.completed ? "line-through text-[#a4a8ac]" : ""} mobile:text-[14px]`}>
                        {task.title}
                    </span>
                )}
            </div>

            <div className="flex justify-center items-center gap-[10px]">
                <FaCheck onClick={() => onToggleComplete(task.id, task.completed)} className="text-[2.1rem] p-[8px] rounded-[5px] cursor-pointer bg-[#6D0FF2] text-[#F2F2F2]" />

                {isEditing ? (
                    <button className="text-[1rem] p-[7px] py-[4px] rounded-[5px] cursor-pointer bg-green-600 text-white" onClick={handleSave}>
                        Salvar
                    </button>
                ) : (
                    <FaRegEdit onClick={handleEdit} className="text-[2.1rem] p-[8px] rounded-[5px] cursor-pointer bg-[#6D0FF2] text-[#F2F2F2]" />
                )}

                <FaRegTrashAlt onClick={() => onDelete(task.id)} className="text-[2.1rem] p-[8px] rounded-[5px] cursor-pointer bg-[#6D0FF2] text-[#F2F2F2]" />
            </div>
            
        </div>
    )
}

export default Task
