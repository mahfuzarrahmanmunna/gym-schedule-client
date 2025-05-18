import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Schedule from "../Pages/Schedule";
import AddSchedule from "../Pages/AddSchedule";
import UpdateSchedule from "../Pages/UpdateSchedule";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                path: '/',
                Component: Home
            },
            {
                path: '/all-schedule',
                Component: Schedule,
                loader: () => fetch('http://localhost:3000/schedule'),
                hydrateFallbackElement: <p>Loading...</p>
            },
            {
                path: '/add-schedule',
                Component: AddSchedule
            },
            {
                path: '/updated/:id',
                Component: UpdateSchedule,
                loader: ({ params }) => fetch(`http://localhost:3000/schedule/${params.id}`),
                hydrateFallbackElement: <p>Loading...</p>
            }
        ]
    },
    {
        path: '/sign-in',
        Component: SignIn
    },
    {
        path: '/sign-up',
        Component: SignUp
    },
])