import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Routers from './app/routers/Routers';
import About from './app/views/About';
import Home from './app/views/Home';

function App() {
  return (
      <BrowserRouter>
        <ul>  
          <li>  
            <Link to="/home">Home</Link>  
          </li>  
          <li>  
            <Link to="/about">About Us</Link>  
          </li>  
        </ul>
        <Routes>
          <Route path='/home' element={< Home />}></Route>  
          <Route path='/about' element={< About />}></Route>  
        </Routes>
      </BrowserRouter>
  );
}

export default App;
