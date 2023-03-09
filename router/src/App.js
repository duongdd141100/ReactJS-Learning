
import { Link, Outlet } from 'react-router-dom'
import { URL } from './common/Constant'

function App() {
  return (
    <>
    <span>duong</span>
    
      <nav>
        <ul>
          <li>
            <Link to={URL.Home}>Home</Link>
          </li>
          <li>
            <Link to={URL.About}>About</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>

  );
}

export default App;
