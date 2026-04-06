import { createRoot } from 'react-dom/client'
import './index.css'
import Approutes from './routes/Approutes.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
 <AuthProvider>
    <Approutes/>
    <ToastContainer/>
 </AuthProvider>
)
