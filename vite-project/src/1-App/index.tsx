import React from 'react'
import ReactDOM from 'react-dom/client'

import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { Provider } from 'react-redux'
import { store } from './store'


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ChakraProvider>
            <Provider store={store}>
            <RouterProvider router={router} />
            </Provider>
        </ChakraProvider>
    </React.StrictMode>,
)
