import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import { StateProvider } from './Compnents/State_provider/State_provider.jsx'
import reducer,{initialState} from './Compnents/Reducer/Reducer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <StateProvider reducer={reducer} initialState={initialState}>
        <App />
      </StateProvider>
    </BrowserRouter>
    
  </StrictMode>,
)
