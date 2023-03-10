import { Routes, Route } from 'react-router-dom'
import { URL } from '../../common/Constant'
import Home from '../views/Home'
import About from '../views/About'
import Email from '../views/components/Email'
import PhoneNumber from '../views/components/PhoneNumber'
import Docs from '../views/components/Docs'
import MainLayout from '../views/layouts/MainLayout'

const items = [
    {
        path: URL.Home.BaseURL,
        name: URL.Home.Name,
        components: <Home />,
    },
    {
        path: URL.About.BaseURL,
        name: URL.About.Name,
        components: <About />,
    }];
const options = [
    {
        path: URL.About.BaseURL + URL.Email.BaseURL,
        name: URL.Email.Name,
        components: <Email />,
    },
    {
        path: URL.About.BaseURL + URL.PhoneNumber.BaseURL,
        name: URL.PhoneNumber.Name,
        components: <PhoneNumber />,
    },
    {
        path: URL.Home.BaseURL + URL.Docs.BaseURL,
        name: URL.Docs.Name,
        components: <Docs />,
    },
];

function Routers() {
    return (
        <>
            <MainLayout items={items} options={options}/>
            <Routes>
                {items.concat(options).map((item) => {
                    return <Route key={item.path} path={item.path} element={item.components} />
                })}
            </Routes>
        </>
    );
}

export default Routers;