import {useEffect, useState} from "react";
import tasksAPI from "@/shared/api/tasks";

const TaskPage = (props) => {
    const {params} = props
    const taskId = params.id

    const [task, setTask] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        tasksAPI.getById(taskId)
        .then((taskData) => {
            setTask(taskData)
            setHasError(false)
        })
            .catch(() => {
                setHasError(true)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [])

    if (isLoading) {
        return <div>LOADING</div>
    }

    if (hasError) {
        return <div>TASK NOT FOUND</div>
    }

    return (
        <div>
            <h1>{task.title}</h1>
            {task.isDone ? "Done" : "Undone"}
        </div>

    )
}

export default TaskPage