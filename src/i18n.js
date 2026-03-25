import i18n from 'i18next';
import  {initReactI18next}  from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import SearchTaskForm from "@/features/search-task/index.js";
import ToDoList from "@/entities/todo/ui/ToDoList/index.js";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            detection: {
                order: ['localStorage', 'cookie', 'htmlTag'],
                cache: ['localStorage'],
            },
            fallbackLng: 'en',
            jp: {
                translation: {
                    Header: {
                        "Title": "Todo リスト",
                    },
                    AddTaskForm: {
                        "SpaceOnlyError": "スペースキーしかあるのでタスクをできません",
                        "AddFunc": "追加",
                        "NewTask": "新しいタスク"
                    },
                    SearchTaskForm: {
                        "Search": "タスクを探し",
                    },
                    ToDoInfo: {
                        "DeleteAll": "全部削除",
                        "Completed": "完成"
                    },
                    UndoneTask: {
                        "Search": "一番目完成しないタスクを見せる"
                    },
                    ToDoList: {
                        "Empty": "まだタスクはありません",
                        "NotFound": "タスクは一つも見つからなかった"
                    }
                }
            },
            en: {
                translation: {
                    Header: {
                        "Title": "Todo list",
                    },
                    AddTaskForm: {
                        "SpaceOnlyError": "Welcome to TODO list",
                        "AddFunc": "Add",
                        "NewTask": "New task"
                    },
                    SearchTaskForm: {
                        "Search": "Search task",
                    },
                    ToDoInfo: {
                        "DeleteAll": "Delete all",
                        "Completed": "Done"
                    },
                    UndoneTask: {
                        "Search": "Show first incomplete task"
                    },
                    ToDoList: {
                        "Empty": "There is no tasks yet",
                        "NotFound": "Task not found"
                    }
                }
            }
        },
        fallback: "jp" ,
        interpolation: {
            escapeValue: false
        }
    })

export default  i18n
