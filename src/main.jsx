// library import
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'

// component imports
import App from './App.jsx'

// css import
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
        <App />
    </BrowserRouter>
 
)
