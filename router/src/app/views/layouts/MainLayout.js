import { Link, Routes,Route, Navigate, NavLink } from 'react-router-dom'
import Menu from './Menu.js'
import Header from './Header.js'
import { useState } from 'react'
import '../../css/MainLayout.css'

export default function MainLayout({children, items, options}) {
    const [menu, setMenu] = useState([]);
    const [activeLink, setActiveLink] = useState('/home')

    return (
        <div>
            <div className='header'>
                <Header items={items} setMenu={(menu) => setMenu(menu)} options={options} />   
            </div>
            
            <div className='body'>
                <div className='menu'>
                    <Menu menu={menu} />
                </div>
                <div className='content'>
                    {children}
                </div>
            </div>
        </div>

    )
}