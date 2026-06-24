import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProductListing from './pages/ProductListing/ProductListing';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import CartDrawer from './components/CartDrawer/CartDrawer';
import NotFound from './pages/NotFound/NotFound';
import { Toaster } from 'react-hot-toast';

function App() {

return (
   <BrowserRouter>
   <Navbar />
<Routes>
    <Route path="/" element={<ProductListing />} />
    <Route path="/product/:id" element={<ProductDetails />} />
     <Route path="*" element={<NotFound />}
  />
</Routes>
     <CartDrawer />
       <Toaster
    position="top-center"
    toastOptions={{
      duration: 2000,
    }}
  />
   </BrowserRouter>
      
   
   

  )
}

export default App;
