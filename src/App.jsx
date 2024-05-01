import './App.css'
import NavButtons from './components/NavButtons'
import Home from './components/Home'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Accordion from './components/accordion/Accordion'


function App() {
  document.body.style.backgroundColor = '#1C1C1C'

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<NavButtons />}>
        <Route index path='/' element={<Home />} />
        <Route path='/accordion' element={<Accordion />}/>
      </Route>
    ), { basename: "/25-projects-react/" }
  );

  return <RouterProvider router={router} />;
}

export default App
