import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NavBar from '../components/NavBar/NavBar';
import SiteFooter from '../components/SiteFooter/SiteFooter';

import '../App.css'

export default function AboutUs() {
    return (
        <div className='container'>
                <NavBar />
                <Routes>
                    <Route exact path='/about' Component={AboutUs} />
                </Routes>
            <SiteFooter />
        </div>
    );
}