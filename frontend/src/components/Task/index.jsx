import { FaCheck } from "react-icons/fa6";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";

function Task({ task, onToggleComplete, onDelete }) {
    return (
        <div className="flex justify-between items-center p-[5px] pl-[8px] rounded-[7px] bg-orange-600">

            <span className={task.completed ? "line-through text-gray-300" : ""}>
                {task.title}
            </span>

            <div className="flex justify-center items-center gap-[10px]">
                <FaCheck onClick={() => onToggleComplete(task.id, task.completed)} className="text-[2.1rem] p-[8px] rounded-[5px] cursor-pointer bg-yellow-600" />
                <FaRegEdit className="text-[2.1rem] p-[8px] rounded-[5px] cursor-pointer bg-yellow-600" />
                <FaRegTrashAlt onClick={() => onDelete(task.id)} className="text-[2.1rem] p-[8px] rounded-[5px] cursor-pointer bg-yellow-600" />
            </div>
            
        </div>
    )
}

export default Task
