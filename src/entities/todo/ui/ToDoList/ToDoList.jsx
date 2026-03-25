import {TodoItem, TaskContext} from "@/entities/todo";
import {useContext} from "react";
import {useTranslation} from "react-i18next";


const ToDoList = (props) => {

    const {t} = useTranslation();

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
                {t('ToDoList.Empty')}
            </div>
        )
    }

    if (hasTasks && isEmptyFilteredTasks) {
        return (
            <div className={styles.emptyMessage}>
                {t('ToDoList.NotFound')}
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