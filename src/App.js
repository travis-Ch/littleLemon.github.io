import './App.css';
import React from 'react';
// componet



//pages
import Reservation from './pages/Reservation';
import OrderOnline from './pages/OrderOnline';
import Home from './pages/Home';
import Login from './pages/Login';

//layout
import  Layout  from './layout/Layout'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<Home/>}/>
      <Route path='/reservation' element={<Reservation/>}/>
      <Route path='/orderOnline' element={<OrderOnline/>}/>
      <Route path='/login' element={<Login/>}/>
    </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
