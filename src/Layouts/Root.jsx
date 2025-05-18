import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';

const Root = () => {
    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto'>
                <Outlet />
            </div>
        </div>
    );
};

export default Root;