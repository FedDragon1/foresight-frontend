import {createRouter, createWebHistory} from 'vue-router'
import AboutPage from "@/views/AboutPage";
import HomePage from "@/views/HomePage";
import RegisterPage from "@/views/RegisterPage";
import LoginPage from "@/views/LoginPage";
import ResetPassword from "@/views/ResetPassword";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/about',
        name: 'About',
        component: AboutPage
    },
    {
        path: '/register',
        name: 'Register',
        component: RegisterPage
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginPage
    },
    {
        path: '/register-otp',
        name: 'OTPPage'
    },
    {
        path: '/reset_password',
        name: "ResetPassword",
        component: ResetPassword
    }
]

export const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
