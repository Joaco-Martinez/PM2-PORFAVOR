"use client"
import React from 'react';
import ButtonLogIn from '../../buttonLogIn/buttonLogIn';
import ButtonRegister from '../../buttonRegister/buttonRegiste.tsx';
import ButtonProfile from '../../buttonprofile/buttonprofile.tsx';
import { useAuthContext } from '../../../../../context/authContext';
import Loading from '../../loading/loading';

const AuthNav = () => {
    const a = useAuthContext();
    const {isAuth} = a;

    if (isAuth === null) {
        return (
            <div className="flex items-center justify-between space-x-4">
                <Loading />
            </div>
        )
    }
    
    if (isAuth) {
        return (
            <div>
                <ButtonProfile />
            </div>
        )
    }

    return (
        <div className="flex items-center justify-between space-x-4">
        <ButtonLogIn />
        <ButtonRegister />
        </div>
    );
}

export default AuthNav;