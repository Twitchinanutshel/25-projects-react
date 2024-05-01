import './App.css'
import NavButtons from './components/NavButtons'
import Home from './components/Home'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'


function App() {
  document.body.style.backgroundColor = '#1F2937'

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<NavButtons />}>
        <Route index path='/' element={<Home />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App
