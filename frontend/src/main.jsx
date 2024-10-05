import ShopContextProvider from './Context/Context.jsx'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <ShopContextProvider>
    <App />
    <ToastContainer autoClose={1000} />
  </ShopContextProvider>
)
