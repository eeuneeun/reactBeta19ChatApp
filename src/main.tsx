import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { LargeArr } from './useMemoTest/LargeArr.tsx'

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
      <App />
      <LargeArr />
    </BrowserRouter>
  </React.StrictMode>,
)
