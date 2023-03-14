import { NavLink } from "react-router-dom";

export default function Header({items, setMenu, options}) {
    return (
        <>
        {items.map((item) => <NavLink
            className={({ isActive }) => isActive ? "active-header-link" : "deactive-header-link"}
            key={item.path}
            onClick={() => setMenu(options.filter((option) => option.path.startsWith(item.path)))}
            to={item.path} >
            {item.name}
        </NavLink>)}
        </>
    );
}