import Menu from './Menu.js'
import Header from './Header.js'
import '../../css/MainLayout.css'

export default function MainLayout({children, items, options, parentUrl, setParentUrl}) {

    return (
        <div>
            <div className='header'>
                <Header items={items} options={options} />
            </div>
            
            <div className='body'>
                <div className='menu'>
                    <Menu parentUrl={parentUrl} options={options} />
                </div>
                <div className='content'>
                    {children}
                </div>
            </div>
        </div>
    )
}