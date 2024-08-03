import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import OrderSummary from './components/OrderSummary';
import NoMatch from './components/NoMatch';
import Products from './components/Products';
import FeaturedProducts from './components/FeaturedProducts';
import NewProducts from './components/NewProducts';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Admin from './components/Admin';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {/* 'PATH' ko kura URL ma dekhinxa , 'ELEMENT' ma chai page component pass garinxa*/}
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='order-summary' element={<OrderSummary />} />

        {/* Nested Routing */}
        <Route path='products' element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path='featured' element={<FeaturedProducts />} />
          <Route path='new' element={<NewProducts />} />
        </Route>

        {/* <Route path='users' element={<Users />} />
        <Route path='users/:userId' element={<UserDetails />} />
        <Route path='users/admin' element={<Admin />} />

        OR

        */}

        {/* Nested routing xa so , parent component(User) ma <outlet/> lekhnu parxa */}
        <Route path='users' element={<Users />}>
          <Route path=':userId' element={<UserDetails />} />
          <Route path='admin' element={<Admin />} />
        </Route>

        <Route path='*' element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
