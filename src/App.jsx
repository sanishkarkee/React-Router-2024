import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        {/*For index page, 'Path' ko kura URL ma dekhinxa , 'element' ma chai page component pass garinxa*/}
        <Route path='about' element={<About />} />
      </Routes>
    </>
  );
}

export default App;
