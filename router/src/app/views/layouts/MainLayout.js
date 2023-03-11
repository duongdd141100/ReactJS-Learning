import { Link, Routes,Route, Navigate } from 'react-router-dom'
import Menu from './Menu.js'
import { useState } from 'react'
import '../../css/MainLayout.css'

export default function MainLayout(props) {
    const [menu, setMenu] = useState([]);
    return (
        <div>
            <div className='header'>
                {props.items.map((item) => <Link key={item.path}
                                                onClick={() => setMenu(props.options.filter((option) => option.path.startsWith(item.path)))}
                                                to={item.path}>{item.name}</Link>)}
            </div>
            <div className='body'>
                <div className='menu'>
                    <Menu menu={menu} />
                </div>
                <div className='content'>
                    <Routes>
                        <Route path='/' element={<Navigate to="/home" replace />}></Route>
                        {props.items.concat(props.options).map((item) => {
                            if (item.path === '/home') {
                                return <Route  key={item.path} index path={item.path} element={item.components} />
                            }
                            return <Route key={item.path} path={item.path} element={item.components} />
                        })}
                    </Routes>
                </div>
            </div>
        </div>

    )
}

