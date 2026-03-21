import Router from './routing/router.jsx'
import TasksPage from "@/pages/TasksPage";
import TaskPage from "@/pages/TaskPage";
import './styles'
const App = () => {
    const routes = {
        '/': TasksPage,
        '/tasks/:id': TaskPage,
        '*': () => <div>404 Page not found</div>,
    }

  return (
        <Router routes={routes}></Router>
  )
}

export default App
