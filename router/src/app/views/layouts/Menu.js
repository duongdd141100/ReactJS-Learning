import { Link } from "react-router-dom";

export default function Menu({ menu }) {
    return (
        <ul>
            {menu.map((item) => <li key={item.path}><Link to={item.path}>{item.name}</Link></li>)}
        </ul>
    );
}