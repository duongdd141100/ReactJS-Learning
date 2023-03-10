import { Routes, Route } from 'react-router-dom'
import { URL } from '../../common/Constant'
import Home from '../views/Home'
import About from '../views/About'

const items = [
    {
        key: URL.Home,
        components: <Home />,
    },
    {
        key: URL.About,
        components: <About />,
    },
]

function Routers() {
    return (
        <Routes>
            {items.map((item) => {
                return <Route key={item.key} path={item.key} element={item.components} />
            })}
        </Routes>
    );
}

export default Routers;