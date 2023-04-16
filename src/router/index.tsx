import React from 'react'
import { createBrowserRouter, type RouteObject } from 'react-router-dom'
import BaseLayout from '@/components/layout/BaseLayout'
import Home from '@/views/Home'

const router: RouteObject[] = [
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
    ],
  },
]

export default createBrowserRouter(router)
