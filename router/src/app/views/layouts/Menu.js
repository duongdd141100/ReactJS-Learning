import { Link } from "react-router-dom";

export default function Menu({parentUrl, options}) {
    let menu = options.filter((op) => op.path.startsWith(parentUrl))
    return (
        <ul>
            {menu.map((item) => <li key={item.path}><Link to={item.path}>{item.name}</Link></li>)}
        </ul>
    );
}