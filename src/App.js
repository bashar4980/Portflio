
import './App.css';

import {
  createBrowserRouter,
  RouterProvider

} from "react-router-dom";
import Main from './layout/Main';
import Home from './Pages/Home/Home';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Main></Main>,
    children:[
      {
      path:"/",
      element:<Home></Home>
    }
  ]
  }
  

])

function App() {
  return (
   <RouterProvider router={router}>

   </RouterProvider>
  );
}

export default App;
