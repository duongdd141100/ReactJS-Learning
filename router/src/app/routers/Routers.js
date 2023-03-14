import { URL } from '../../common/Constant'
import Home from '../views/Home'
import About from '../views/About'
import Email from '../views/components/Email'
import PhoneNumber from '../views/components/PhoneNumber'
import Docs from '../views/components/Docs'
import MainLayout from '../views/layouts/MainLayout'
import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'


function Routers() {
    const [num, setNum] = useState(1)
    const items = [
        {
            path: URL.Home.BaseURL,
            name: URL.Home.Name,
            components: <Home num={num} />,
        },
        {
            path: URL.About.BaseURL,
            name: URL.About.Name,
            components: <About num={num} />,
        }];
    const options = [
        {
            path: URL.About.BaseURL + URL.Email.BaseURL,
            name: URL.Email.Name,
            components: <Email num={num} />,
        },
        {
            path: URL.About.BaseURL + URL.PhoneNumber.BaseURL,
            name: URL.PhoneNumber.Name,
            components: <PhoneNumber num={num} />,
        },
        {
            path: URL.Home.BaseURL + URL.Docs.BaseURL,
            name: URL.Docs.Name,
            components: <Docs num={num} />,
        },
    ];
    return (
        <MainLayout items={items} options={options}>
            <Routes>
                {items.map((item) => {
                return <Route key={item.path} path={item.path} element={item.components} />;
                })}
            </Routes>
        </MainLayout>
    );
}

export default Routers;