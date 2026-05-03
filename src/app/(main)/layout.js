import RightSidebar from '@/components/homepage/news/RightSidebar';
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
                 <div className="grid md:hidden w-52 h-32">
                   <RightSidebar />  
                 </div>
                 
             {children}
             </div>

        </div>
       
    );
};

export default MainLayout
;