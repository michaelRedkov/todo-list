import {createContext} from "react";
import useTasks from "./useTasks.js";
import useIncompleteTaskScroll from "./useIncompleteTaskScroll.js";

export const TaskContext = createContext({})

export const TaskProvider = (props) => {
    const {children} = props

    const {
        tasks,
        filteredTasks,
        deleteTask,
        deleteAllTasks,
        toggleTaskComplete,
        newTaskTitle,
        setNewTaskTitle,
        searchQuery,
        setSearchQuery,
        newTaskInputRef,
        addTask,
        disappearingTaskId,
        appearingTaskId,
    } = useTasks()

    const {
        firstIncompleteTaskRef,
        firstIncompleteTaskId,
    } = useIncompleteTaskScroll(tasks)

    return (
        <TaskContext.Provider value={
        {
            tasks,
            filteredTasks,
            firstIncompleteTaskRef,
            firstIncompleteTaskId,
            deleteTask,
            deleteAllTasks,
            toggleTaskComplete,

            newTaskTitle,
            setNewTaskTitle,
            searchQuery,
            setSearchQuery,
            newTaskInputRef,
            addTask,
            disappearingTaskId,
            appearingTaskId,
        }}
    >
            {children}
    </TaskContext.Provider>)
}