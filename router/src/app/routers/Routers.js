import { URL } from '../../common/Constant'
import Home from '../views/Home'
import About from '../views/About'
import Email from '../views/components/Email'
import PhoneNumber from '../views/components/PhoneNumber'
import Docs from '../views/components/Docs'
import MainLayout from '../views/layouts/MainLayout'
import { useState } from 'react'
import { Routes,Route, Navigate } from 'react-router-dom'



function Routers() {
    const [parentUrl, setParentUrl] = useState(URL.Home.BaseURL)
    const items = [
        {
            path: URL.Home.BaseURL,
            name: URL.Home.Name,
            components: <Home setParentUrl={(url) => setParentUrl(url)}/>,
        },
        {
            path: URL.About.BaseURL,
            name: URL.About.Name,
            components: <About setParentUrl={(url) => setParentUrl(url)}/>,
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
    return (
        <MainLayout items={items} options={options} parentUrl={parentUrl} setParentUrl={(url) => setParentUrl(url)}>
            <Routes>
                <Route path='/' element={<Navigate to='/home' replace />}></Route>
                {items.concat(options).map((item) => {
                    return <Route key={item.path} path={item.path} element={item.components} />;
                })}
            </Routes>
        </MainLayout>
    );
}

export default Routers;