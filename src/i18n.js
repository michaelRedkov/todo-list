import i18n from 'i18next';
import  {initReactI18next}  from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import SearchTaskForm from "@/features/search-task/index.js";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            jp: {
                translation: {
                    Header: {
                        "Title": "Todo リスト",
                    },
                    AddTaskForm: {
                        "SpaceOnlyError": "スペースキーしかあるのでタスクをできません",
                        "AddFunc": "追加",
                        "NewTask": "新しいタスク",
                    },
                    SearchTaskForm: {
                        "Search": "タスクを探し",
                    },
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
                        "NewTask": "New task",
                    },
                    SearchTaskForm: {
                        "Search": "Search task",
                    },
                }
            }
        },
        fallback: "jp" ,
        interpolation: {
            escapeValue: false
        }
    })

export default  i18n
