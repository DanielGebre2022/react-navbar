import React  from "react";
import ReactDom from 'react-dom';
import {BrowserRouter,Routes,Route} from "react-router-dom";

import './index.css';
import App from './routes/App';
import Contact from './routes/Contact'
import About from './routes/About'



ReactDom.render(

    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </BrowserRouter>,    

    
    document.getElementById('root')
);

