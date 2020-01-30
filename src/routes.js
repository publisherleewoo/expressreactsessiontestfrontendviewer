
import Home from "./pages/Home"
import Login from "./pages/Login"
import Join from "./pages/Join"
import Board from "./pages/Board"


let routes = [
    { path: "/", exact: true, component: Home },
    { path: "/login", exact: true, component: Login },
    { path: "/join", exact: true, component: Join },
    { path: "/board", exact: true, component: Board },
]

export default routes 