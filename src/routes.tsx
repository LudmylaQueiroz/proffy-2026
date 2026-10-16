import { createBrowserRouter } from 'react-router'
import { SignIn } from './pages/auth/sign-in'
import { SignUp } from './pages/auth/sign-up'
import { FinallyRegister } from './pages/auth/finally-register'
import { ForgotPassword } from './pages/auth/forgot-password'
import { FinallyForgotPassword } from './pages/auth/finally-forgot-password'

export const router = createBrowserRouter([
    { path: '/sign-in', element: <SignIn /> },
    { path: '/sign-up', element: <SignUp /> },
    { path: '/sign-up/finally-register', element: <FinallyRegister /> },
    { path: '/forgot-password', element: <ForgotPassword /> },
    { path: '/forgot-password/finally-forgot-password', element: <FinallyForgotPassword /> }
])