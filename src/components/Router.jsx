import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Homepage} from "../pages/Homepage";
import {Aboutpage} from "../pages/Aboutpage";
import {Blogpage} from "../pages/Blogpage";
import {Notfoundpage} from "../pages/Notfoundpage";
import {Login} from "../pages/Login";

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/about" element={<Aboutpage/>}/>
                <Route path="/posts" element={<Blogpage/>}/>
                <Route path="*" element={<Notfoundpage/>}/>
                <Route path="/login" elemtnt={<Login/>}/>
            </Routes>
        </div>
    );
};

export default Router;