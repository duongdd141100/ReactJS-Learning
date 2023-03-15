import Menu from './Menu.js'
import Header from './Header.js'
import '../../css/MainLayout.css'
import { useLocation } from 'react-router-dom'

export default function MainLayout({children, items, options}) {
    const parentUrl = '/' + useLocation().pathname.split('/')[1];
    return (
        <div>
            <div className='header'>
                <Header items={items} options={options} />
            </div>
            
            <div className='body'>
                <div className='menu'>
                    <Menu menu={options.filter(op => op.path.startsWith(parentUrl))} />
                </div>
                <div className='content'>
                    {children}
                </div>
            </div>
        </div>
    )
}