import BreackingNews from '@/components/shared/BreackingNews';
import Header from '@/components/shared/Header';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

const MainLayout
 = ({children}) => {
     return (
         <div className='w-11/12  mx-auto'>
             <div>
                  <Header />
             <BreackingNews/>
         <Navbar />
             {children}
             </div>

        </div>
       
    );
};

export default MainLayout
;