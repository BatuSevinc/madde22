import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/GalanoGrotesqueBold.otf';
import './fonts/GalanoGrotesqueExtraBold.otf';
import './fonts/GalanoGrotesqueMedium.otf';
import './fonts/GalanoGrotesqueRegular.otf';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
