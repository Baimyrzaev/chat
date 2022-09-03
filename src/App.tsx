import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from './pages/Auth'
import Chat from './pages/Chat';
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from './configs';

initializeApp(firebaseConfig)

function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  )
}

export default App
