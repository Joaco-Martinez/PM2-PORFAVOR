import React, { FC } from  'react';
import Footer from '../components/footer';

interface LayaoutSinglePageProps {
    children: React.ReactNode
}
const LayaoutSinglePage: FC<LayaoutSinglePageProps> = ({children}) => {
    return (
        <>
            {children}
            <Footer />
        </>
    );
};

export default LayaoutSinglePage;