import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AboutMe from "../../Pages/AboutMe/AboutMe";
import Contact from "../../Pages/Contact/Contact";
import Home from "../../Pages/Home/Home/Home"
import Projects from "../../Pages/Projects/Projects/Projects";
import Login from "../../Login-SignUp/Login/Login";
import SignUp from "../../Login-SignUp/SignUp/SignUp";


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
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
        ]

    }
])

export default router;