import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layouts from './layouts'
import HomeComponents from '../component/homeComponents'


const routerConfig = createBrowserRouter([
    {
        element: <Layouts/>,
        children: [
            {
                path: '/',
                element: <HomeComponents/>
            }
        ]
    }
])


export default routerConfig