import {memo, useContext, useMemo} from "react";
import {TaskContext} from "@/entities/todo";
import {useTranslation} from "react-i18next";

const ToDoInfo = (props) => {

    const {t} = useTranslation();

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
            <div className={styles.totalTasks}>{t('ToDoInfo.Completed')}: {done} / {total}</div>
            {hasTasks && (
                <button
                    className={styles.deleteAllButton}
                    type="button"
                    onClick={deleteAllTasks}
                    >
                    {t('ToDoInfo.DeleteAll')}
                </button>
            )}
        </div>
    )
}

export default memo(ToDoInfo)