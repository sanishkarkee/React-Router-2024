import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import OrderSummary from './components/OrderSummary';
import NoMatch from './components/NoMatch';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {/* 'PATH' ko kura URL ma dekhinxa , 'ELEMENT' ma chai page component pass garinxa*/}
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='order-summary' element={<OrderSummary />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
