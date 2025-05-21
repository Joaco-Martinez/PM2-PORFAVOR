import React, { FC } from  'react';


interface LayaoutViewsProfileProps {
    children: React.ReactNode
}
const LayaoutViews: FC<LayaoutViewsProfileProps> = ({children}) => {
    return (
        <>
            
            {children}
        </>
    );
};

export default LayaoutViews;