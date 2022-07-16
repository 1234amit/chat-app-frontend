import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from './pages/Chat';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {

  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Chat />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App