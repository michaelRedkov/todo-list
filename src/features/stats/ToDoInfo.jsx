import {memo, useContext, useMemo} from "react";
import {TaskContext} from "@/entities/todo";

const ToDoInfo = (props) => {

    const {styles} = props

    const {
       tasks,
        deleteAllTasks,
    } = useContext(TaskContext);

    const total = tasks.length;
    const hasTasks = total > 0
    const done = useMemo(() => {
        return tasks.filter(({isDone}) => isDone).length
    }, [tasks])

    const handleClick = (event) => {
        console.log("CLICK", event)
    }

    return (
        <div className={styles.info}>
            <div className={styles.totalTasks}>完成: {done} from {total}</div>
            {hasTasks && (
                <button
                    className={styles.deleteAllButton}
                    type="button"
                    onClick={deleteAllTasks}
                    >
                    全部削除
                </button>
            )}
        </div>
    )
}

export default memo(ToDoInfo)