import './App.css'
import NavButtons from './components/NavButtons'
import Home from './components/Home'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Accordion from './components/accordion/Accordion'
import RandomColorGenerator from './components/randomColorGenerator/RandomColorGenerator'
import StarRating from './components/starRating/StarRating'
import ImageSlider from './components/imageSlider/ImageSlider'
import LoadMoreButton from './components/loadMoreButton/LoadMoreButton'


function App() {
  document.body.style.backgroundColor = '#1C1C1C'

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<NavButtons />}>
        <Route index path='/' element={<Home />} />
        <Route path='/accordion' element={<Accordion />}/>
        <Route path='/random-color-generator' element={<RandomColorGenerator />}/>
        <Route path='/star-rating' element={<StarRating />}/>
        <Route path='/image-slider' element={<ImageSlider url={'https://picsum.photos/v2/list'} limit={'10'} />}/>
        <Route path='/load-more-button' element={<LoadMoreButton />}/>
      </Route>
    ), { basename: "/25-projects-react/" }
  );

  return <RouterProvider router={router} />;
}

export default App
