
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Pages/Home/Home';
import Product from './components/Pages/Product/Product';
import ProductDetail from './components/Pages/ProductDetails/ProductDetail';
import Login from './components/Pages/Login/Login';
import Register from './components/Pages/Login/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/Pages/Login/PrivateRoute'
import Cart from './components/Pages/Cart/Cart';
import Shipping from './components/Pages/Shipping/Shipping';
import Order from './components/Pages/Order/Order';
import AdminHome from './components/AdminPanel/Pages/AdminHome/AdminHome';
import AdminProducts from './components/AdminPanel/Pages/Products/AdminProducts';
import AdminOrder from './components/AdminPanel/Pages/Order/AdminOrder';
import AdminUser from './components/AdminPanel/Pages/Users/AdminUser';
import AddProduct from './components/AdminPanel/Pages/Products/AddProduct';
function App() {
 
  return (
    <div className="App">

<AuthProvider>
<Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute exact path="/watches">
            <Product></Product>
          </PrivateRoute>
          <PrivateRoute path="/watches/:key">
            <ProductDetail></ProductDetail>
          </PrivateRoute>
          <PrivateRoute path="/order/:key/:_id">
            <Shipping></Shipping>
          </PrivateRoute>
          <PrivateRoute path='/order'>
            <Order></Order>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login> 
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/myCart">
          <Cart></Cart>
          </PrivateRoute>
          <PrivateRoute path="/adminpanel">
            <AdminHome></AdminHome>
          </PrivateRoute>
          <PrivateRoute path="/admin/products">
            <AdminProducts></AdminProducts>
          </PrivateRoute>
          <PrivateRoute path="/admin/dashboard">
            <AdminHome></AdminHome>
          </PrivateRoute>
          <PrivateRoute path="/admin/orders">
            <AdminOrder></AdminOrder>
          </PrivateRoute>
          <PrivateRoute path="/admin/users">
            <AdminUser></AdminUser>
          </PrivateRoute>
          <PrivateRoute path="/admin/addproduct/:keys">
            <AddProduct></AddProduct>
          </PrivateRoute>
          </Switch>
      </Router>
</AuthProvider>

    </div>
  );
}

export default App;
