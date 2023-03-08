import { BrowserRouter, Routes, Route } from "react-router-dom"
import AboutLayout from './about/AboutLayout'
import PhoneNumber from './about/PhoneNumber'
import Email from './about/Email'

const About = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/about" element={<AboutLayout />}>
                    <Route path="/phone-number" element={<PhoneNumber />} />
                    <Route path="/email" element={<Email />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default About;