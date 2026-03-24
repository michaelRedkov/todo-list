import {useContext} from 'react';
import AddTaskForm from '@/features/add-task';
import SearchTaskForm from "@/features/search-task";
import ToDoInfo from "@/features/stats";
import {TodoList} from "@/entities/todo";
import Button from "@/shared/ui/Button";
import ChangeLanguage from "@/features/change-language/index.js";

import {TaskContext} from "@/entities/todo";

import styles from './Todo.module.scss'
import {useTranslation} from "react-i18next";
const Todo = () => {
    const {t, i18n} = useTranslation();
    const { firstIncompleteTaskRef } = useContext(TaskContext);

    return (
            <div className={styles.todo}>
                <h1 className={styles.title}>{t('Header.Title')}</h1>
                <AddTaskForm styles={styles}/>
                <SearchTaskForm styles={styles}/>
                <ToDoInfo styles={styles}/>
                <Button
                    onClick={() => firstIncompleteTaskRef.current?.scrollIntoView({behavior: 'smooth',})}>
                    一番目完成しないタスクを見せる
                </Button>
                <TodoList styles={styles}/>
                <ChangeLanguage/>
            </div>
    )
}

export default Todo