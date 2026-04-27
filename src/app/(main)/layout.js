import Header from '@/shared/Header';
import Navbar from '@/shared/Navbar';
import React from 'react';

const MainLayout
 = ({children}) => {
     return (
        <>
         <Navbar />
         <Header />
             {children}
        </>
       
    );
};

export default MainLayout
;