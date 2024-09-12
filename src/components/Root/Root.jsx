import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import NameSearch from '../../NameSearch/NameSearch';

const Root = () => {
    return (
        <div>
            
            <NavBar></NavBar>
            <NameSearch></NameSearch>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;