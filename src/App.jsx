import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import OrderSummary from './components/OrderSummary';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {/*'Path' ko kura URL ma dekhinxa , 'element' ma chai page component pass garinxa*/}
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='order-summary' element={<OrderSummary />} />
      </Routes>
    </>
  );
}

export default App;
