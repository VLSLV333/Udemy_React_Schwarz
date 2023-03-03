// import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'

import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import RootLayout from './pages/Root';
import ErrorPage from './pages/ErrorPage';
import ProductDetail from './pages/ProductDetail';

// https://example.com/products  ===   /products   is the path

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage/>}/>
//     <Route path='/products' element={<ProductsPage/>}/>
//   </Route>
// )
// const router = createBrowserRouter(routeDefinitions)

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      
      // {path: '', element: <HomePage/>},   this is EXACTLY THE SAME as next line of code

      {index: true, element: <HomePage/>},    // renders element on the same link as parent element

      {path: 'products', element: <ProductsPage/>},
      //  /:'this is a dynamic part of link'/test <-'nov this is not dynamic after dynamic part, this is allowed'
      {path: 'products/:productID', element: <ProductDetail/>}
    ]
  }
  ])
  
function App() {
  return <RouterProvider router={router}/>;
}

export default App;
