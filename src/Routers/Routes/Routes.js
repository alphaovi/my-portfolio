import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AboutMe from "../../Pages/AboutMe/AboutMe";
import Contact from "../../Pages/Contact/Contact";
import Home from "../../Pages/Home/Home/Home"
import Projects from "../../Pages/Projects/Projects/Projects";
import Login from "../../Login-SignUp/Login/Login";
import SignUp from "../../Login-SignUp/SignUp/SignUp";
import Overview from "../../Pages/Overview/Overview";
import MyMessages from "../../Pages/MyMessages/MyMessages/MyMessages";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/project",
                element: <Projects></Projects>
            },
            {
                path: "/aboutme",
                element: <AboutMe></AboutMe>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/message",
                element: <MyMessages></MyMessages>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/overview/:id",
                element: <Overview></Overview>,
                loader: ({params}) => fetch(`http://localhost:5000/projects/${params.id}`)
            },
        ]

    }
])

export default router;