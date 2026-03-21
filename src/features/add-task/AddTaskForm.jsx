import Field from "@/shared/ui/Field";
import Button from "@/shared/ui/Button";
import {useContext, useState} from "react";
import {TaskContext} from "@/entities/todo";

const AddTaskForm = (props) => {

    const {styles} = props

    const {
        addTask,
        newTaskTitle,
        setNewTaskTitle,
        newTaskInputRef,
    } = useContext(TaskContext)

    const [error, setError] = useState('');

    const clearNewTaskTitle = newTaskTitle.trim()
    const isNewTasTitleEmpty = clearNewTaskTitle.length === 0

    const onSubmit = (event) => {
        event.preventDefault()
        if (!isNewTasTitleEmpty) {
            addTask(clearNewTaskTitle)
        }
    }

    const onInput = (event) => {

        const { value } = event.target
        const clearValue = value.trim()
        const hasOnlySpaces = value.length > 0 && clearValue.length === 0
        setNewTaskTitle(value)
        setError(hasOnlySpaces ? 'スペースキーしかあるのでタスクをできません' : '')
    }

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <Field
                className={styles.field}
                label="新しいタスク"
                id="new-task"
                value={newTaskTitle}
                error={error}
                onInput={onInput}
                ref={newTaskInputRef}
            />
            <Button
                type="submit"
                isDisabled={isNewTasTitleEmpty}
            >追加</Button>
        </form>
    )
}

export default AddTaskForm;