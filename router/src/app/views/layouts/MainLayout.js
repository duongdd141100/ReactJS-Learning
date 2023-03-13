import { Link, Routes,Route, Navigate, NavLink } from 'react-router-dom'
import Menu from './Menu.js'
import { useState } from 'react'
import '../../css/MainLayout.css'

export default function MainLayout(props) {
    const [menu, setMenu] = useState([]);
    const [activeLink, setActiveLink] = useState('/home')
    
    return (
        <div>
            <div className='header'>
                {props.items.map((item) => <NavLink
                                                className={({ isActive }) => isActive ? "active-header-link" : "deactive-header-link"}
                                                key={item.path}
                                                onClick={() => setMenu(props.options.filter((option) => option.path.startsWith(item.path)))}
                                                to={item.path} >
                                                {item.name}
                                            </NavLink>)}
                                            
            </div>
            <div className='body'>
                <div className='menu'>
                    <Menu menu={menu} />
                </div>
                <div className='content'>
                    <Routes>
                        <Route path='/' element={<Navigate to="/home" replace />}></Route>
                        {props.items.concat(props.options).map((item) => {
                            return <Route key={item.path} path={item.path} element={item.components} />
                        })}
                    </Routes>
                </div>
            </div>
        </div>

    )
}

