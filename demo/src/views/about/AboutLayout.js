import { Outlet, Link } from "react-router-dom";
const AboutLayout = () => {
    return (
        <>
            <h5>About</h5>
                <nav>
                    <Link to='/about/phone-number'>Phone number</Link> | 
                    <Link to='/about/email'> Email</Link>
                </nav>
                <Outlet />
        </>
    );
}

export default AboutLayout;