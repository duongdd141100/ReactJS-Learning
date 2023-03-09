import { BrowserRouter, Routes, Route } from "react-router-dom"
import AboutLayout from './about/AboutLayout'
import PhoneNumber from './about/PhoneNumber'
import Email from './about/Email'

const About = () => {
    return (
        <>
                <Routes>
                    <Route path="/" element={<AboutLayout />}>
                        <Route path="/phone-number" element={<PhoneNumber />} />
                        <Route path="/email" index element={<Email />} />
                    </Route>
                </Routes>
        </>
        
    );
}

export default About;