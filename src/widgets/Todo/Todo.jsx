import {useContext} from 'react';
import AddTaskForm from '@/features/add-task';
import SearchTaskForm from "@/features/search-task";
import ToDoInfo from "@/features/stats";
import {TodoList} from "@/entities/todo";
import Button from "@/shared/ui/Button";

import {TaskContext} from "@/entities/todo";

import styles from './Todo.module.scss'
const Todo = () => {
    const { firstIncompleteTaskRef } = useContext(TaskContext);

    return (
            <div className={styles.todo}>
                <h1 className={styles.title}>To do リスト</h1>
                <AddTaskForm styles={styles}/>
                <SearchTaskForm styles={styles}/>
                <ToDoInfo styles={styles}/>
                <Button
                    onClick={() => firstIncompleteTaskRef.current?.scrollIntoView({behavior: 'smooth',})}>
                    一番目完成しないタスクを見せる
                </Button>
                <TodoList styles={styles}/>
            </div>
    )
}

export default Todo