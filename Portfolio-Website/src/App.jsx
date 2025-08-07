import {createBrowserRouter} from 'react-router-dom';
import {AppLayout} from './AppLayout';
import { Children } from 'react';
import { Home } from './components/Home';
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import  ErrorPage  from "./components/ErrorPage";
import {RouterProvider} from 'react-router-dom';

const App = () =>{
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/skills",
          element: <Skills />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}/>

}
export default App
