
import './App.css';

import {NavLink, Route, Routes} from 'react-router-dom';
import Home from './screens/Home';
import StockHome from './screens/StockHome';
import Stock from './screens/Stock';
import NotFound from './screens/NotFound';
import About from './screens/About';



function App() {

  return (
    <div className="App">
      <div className='div-nav'>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/stockhome">StockPage</NavLink>
          <NavLink to = "/about">About</NavLink>
        </nav>
      </div>
      <div className='div-routes'>
        <Routes>
          <Route exact path = "/" element = {<Home/>} />
          <Route path = "/stockhome" element = {<StockHome/>}/>
          <Route exact path = "/stockhome/:symbol" element = {<Stock/>} />
          <Route path = "/about" element = {<About />} />
          <Route path = "*" element = {<NotFound/>} />
        </Routes>
        </div>
    </div>
  );
}

export default App;
