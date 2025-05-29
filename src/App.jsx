import {createBrowserRouter,RouterProvider} from "react-router-dom";

import './App.css'


import Paste from './components/Paste'          // Add this
import Navbar4 from "./components/Navbar4";
import Home4 from "./components/Home4";
import ViewPaste4 from "./components/ViewPaste4";

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
     <Navbar4 />
     <Home4 />

      </div>
    },

    {
      path:"/pastes",
      element:
      <div>
        
        <Navbar4 />
        <Paste/>
      

      </div>
    },

     {
      path:"/pastes/:id",
      element:
      <div>
        <Navbar4 />
      <ViewPaste4 />

      </div>
    }


]
)

function App() {

  return (
    <>
      <div>
     <RouterProvider router={router} />
      </div>
    
      
    </>
  )
}

export default App
