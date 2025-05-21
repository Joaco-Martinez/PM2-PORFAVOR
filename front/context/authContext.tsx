"use client"

import { createContext, useEffect } from "react"
import { useContext, ReactNode, useState } from "react";
import { IUser } from "../interfaces";



interface AuthContextType {
    user: IUser | null;
    isAuth: boolean | null;
    token?: string | null;
    SaveUserData: (data:{ user: IUser, token: string }) => void;
    ResetUserData: () => void;
}


const AuthContext  = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}: {children: ReactNode}) => {
    const [user, setUser] = useState<AuthContextType["user"]>();
    
    const [token, setToken] = useState<string | null>(null);

    const [isAuth, setIsAuth] = useState<AuthContextType["isAuth"]>(null);
    
    
        useEffect(() => {
            const storedToken = localStorage.getItem('token');
            const storedUser = localStorage.getItem('user');
    
            if (storedToken && storedUser) {
                setToken(storedToken);
                setUser(JSON.parse(storedUser));
                setIsAuth(true);
            } else {
                setIsAuth(false);
            }
        }, [])
    


    const SaveUserData = (data: { user: IUser, token: string }) => {


        setUser(data.user);
        setIsAuth(true);
        setToken(data.token);

        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        
    }


    const ResetUserData = () => {
        setUser(null);
        setIsAuth(false);
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }
    
    return (
        <AuthContext.Provider value={{
            user: user || null,
            isAuth,
            SaveUserData,
            ResetUserData,
            token,

        }}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuthContext must be used within a AuthProvider");
    }

    return context;
};