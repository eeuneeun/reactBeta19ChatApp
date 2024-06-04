import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/layout/header.tsx';
import Footer from './components/layout/foooter.tsx';

ReactDOM.createRoot(document.getElementById('root')!, {
  onUncaughtError: (error, errorInfo) => {
    console.log("onUncaughtError", error, errorInfo)
  },
  onCaughtError: (error, errorInfo) => {
    console.log("onCaughtError", error, errorInfo)
    // ... log error report
  }
}).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <div className='contents'>
        <App />
      </div>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
