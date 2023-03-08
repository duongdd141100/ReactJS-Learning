import { Outlet, Link } from "react-router-dom";
const AboutLayout = () => {
    return (
        <>
            <h5>ABOUT</h5>
                <nav>
                    <Link to='/phone-number'>Phone number</Link>
                    <Link to='/email'>Email</Link>
                </nav>
                <Outlet />
        </>
    );
}

export default AboutLayout;