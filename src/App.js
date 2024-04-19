import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import ProductDetails from './component/ProductDetails'
import AddProduct from './component/AddProduct';
import EditProduct from './component/EditProduct';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<ProductDetails />}></Route>
        <Route path='/addProduct' element={<AddProduct />}></Route>
        <Route path='/editProduct/:id' element={<EditProduct />}></Route>
      </Routes>

    </>

  );
}

export default App;