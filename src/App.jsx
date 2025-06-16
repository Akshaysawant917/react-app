import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { AppLayout } from "./components/Layout/AppLayout"

import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { Country } from "./pages/Country"
import { ErrorComp } from "./pages/ErrorComp"
import { CountryDetail } from "./pages/CountryDetail"


const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorComp />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/country",
                element: <Country />
            },
            {
                path: "/country/:name",
                element: <CountryDetail />,
            },
        ]
    }

])

export const App = () => {
    return <RouterProvider router={router}>  </RouterProvider>
}

export default App