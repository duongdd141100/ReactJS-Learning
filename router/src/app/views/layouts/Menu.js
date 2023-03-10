import { Link } from "react-router-dom";

export default function Menu(props) {
    console.log(props.menu)
    return (
        <ul>
            {props.menu.map((item) => <li key={item.path}><Link to={item.path}>{item.name}</Link></li>)}
        </ul>
    );
}