import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import Layout from './views/Layout'
function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='About' element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
