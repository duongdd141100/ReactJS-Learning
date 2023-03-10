import { Link } from 'react-router-dom'
import Menu from './Menu.js'
import { useState } from 'react'



// function setMenu(options, item) {
//     menu = options.filter((option) => option.path.startsWith(item.path))
//     console.log(menu)
// }
export default function MainLayout(props) {
    const [menu, setMenu] = useState([]);
    return (
        <div>
            <ul>
                {props.items.map((item) => <li key={item.path}><Link 
                                                onClick={() => {setMenu(props.options.filter((option) => option.path.startsWith(item.path)))}}
                                                to={item.path}>{item.name}</Link></li>)}
            </ul>

            <Menu menu={menu} />
        </div>

    )
}

