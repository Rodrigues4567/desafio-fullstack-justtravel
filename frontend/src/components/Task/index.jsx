
function Task({ task }) {
    return (
        <div className="flex items-center gap-5 bg-orange-600">
            {task.title}
        </div>
    )
}

export default Task
