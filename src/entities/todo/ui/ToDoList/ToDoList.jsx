import {TodoItem, TaskContext} from "@/entities/todo";
import {useContext} from "react";


const ToDoList = (props) => {

    const {styles} = props

    const {
        tasks,
        filteredTasks
    } = useContext(TaskContext);

    const hasTasks = tasks.length > 0
    const isEmptyFilteredTasks = filteredTasks?.length === 0


    if (!hasTasks) {
        return (
            <div className={styles.emptyMessage}>
                まだタスクはありません
            </div>
        )
    }

    if (hasTasks && isEmptyFilteredTasks) {
        return (
            <div className={styles.emptyMessage}>
                タスクは一つも見つからなかった
            </div>
        )
    }

    return (
        <ul className={styles.list}>
            {(filteredTasks ?? tasks).map((task) => (
                <TodoItem
                    className={styles.item}
                    key={task.id}
                    {...task}
                />
            ))}
        </ul>
    )
}

export default ToDoList;