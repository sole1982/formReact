import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Form } from "react-router-dom"
import Contact from "./pages/contact"
import Home from "./pages/home"
import Layout from "./pages/layout";
import Error from "./pages/error"

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Route>
        </Routes> 
   </BrowserRouter>
  </React.StrictMode>,
)
