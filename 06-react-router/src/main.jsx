import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
   createBrowserRouter,
   createRoutesFromElements,
   Route,
   RouterProvider,
} from 'react-router-dom'

import NotFound from './components/shared/NotFound.jsx'

import Layout from './layouts/Layout.jsx'
import HomePage from './components/pages/website/Home.page.jsx'
import AboutPage from './components/pages/website/About.page.jsx'
import ContactPage from './components/pages/website/Contact.page.jsx'
import ProjectPage from './components/pages/website/Project.page.jsx'

import AuthLayout from './layouts/AuthLayout.jsx'
import Login from './components/pages/auth/Login.jsx'
import Signup from './components/pages/auth/Signup.jsx'

import DashboardLayout from './layouts/DashboardLayout.jsx'
import Blog from './components/pages/dashboard/Blog.jsx'
import User from './components/pages/dashboard/User.jsx'

// const navigation = createBrowserRouter([
//    {
//       path: '/',
//       element: <Layout />,
//       children: [
//          {
//             path: '',
//             element: <HomePage />,
//          },
//          {
//             path: 'about',
//             element: <AboutPage />,
//          },
//          {
//             path: 'project',
//             element: <ProjectPage />,
//          },
//          {
//             path: 'contact',
//             element: <ContactPage />,
//          },
//       ],
//    },
// ])

const navigation = createBrowserRouter(
   createRoutesFromElements(
      <Route>
         {/* Public Auth Navigation */}
         <Route element={<AuthLayout />}>
            {/* childerns */}
            <Route
               path='/auth/login'
               element={<Login />}
            />
            <Route
               path='/auth/register'
               element={<Signup />}
            />
         </Route>

         {/* Private Pages */}
         <Route element={<DashboardLayout />}>
            {/* childerns */}
            <Route
               path='/dashboard/blog'
               element={<Blog />}
            />
            <Route
               path='/dashboard/product/:id'
               element={<User />}
            />
         </Route>

         {/* Public Website Navigation */}
         <Route
            path='/'
            element={<Layout />}>
            {/* childerns */}
            <Route
               path=''
               element={<HomePage />}
            />
            <Route
               path='about'
               element={<AboutPage />}
            />
            <Route
               path='project'
               element={<ProjectPage />}
            />
            <Route
               path='contact'
               element={<ContactPage />}
            />

            <Route
               path='*'
               element={<NotFound />}
            />
         </Route>
      </Route>
   )
)

createRoot(document.getElementById('root')).render(
   <StrictMode>
      <RouterProvider router={navigation} />
   </StrictMode>
)
