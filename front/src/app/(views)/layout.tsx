import React, { FC } from  'react';
import Navbar from '../components/Navbar/navbar';
import Footer from '../components/footer';
import { ToastContainer } from 'react-toastify';
interface LayaoutViewsProps {
    children: React.ReactNode
}
const LayaoutViews: FC<LayaoutViewsProps> = ({children}) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
            <ToastContainer />
        </>
    );
};

export default LayaoutViews;