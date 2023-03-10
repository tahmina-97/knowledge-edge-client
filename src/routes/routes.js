import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Checkout from "../components/Checkout/Checkout";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import CoursePerCategory from "../components/CoursePerCategory/CoursePerCategory";
import Courses from "../components/Courses/Courses";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Faq from "../components/Faq/Faq";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                loader: () => fetch('https://knowledge-dot-server.vercel.app/courses'),
                element: <Courses></Courses>
            },
            {
                path: '/faq', element: <Faq></Faq>
            },
            {
                path: '/blog', element: <Blog></Blog>
            },
            {
                path: '/login', element: <Login></Login>
            },
            {
                path: '/register', element: <Register></Register>
            },
            {
                path: '/course/:id',
                loader: ({ params }) => fetch(`https://knowledge-dot-server.vercel.app/course/${params.id}`),
                element: <CourseDetails></CourseDetails>
            },
            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`https://knowledge-dot-server.vercel.app/category/${params.id}`),
                element: <CoursePerCategory></CoursePerCategory>
            },
            {
                path: '/premium/:id',
                loader: ({ params }) => fetch(`https://knowledge-dot-server.vercel.app/course/${params.id}`),
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
            },

        ]
    }
])