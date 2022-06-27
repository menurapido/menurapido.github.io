import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import 'primereact/resources/themes/md-dark-indigo/theme.css';  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import PrimeReact from 'primereact/api';

PrimeReact.inputStyle = 'filled';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
