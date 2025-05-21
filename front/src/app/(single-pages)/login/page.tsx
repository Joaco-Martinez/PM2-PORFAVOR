import React from "react";
import LoginForm from "@/app/components/loginForm/page";
import foto from "../../../../public/img/ChatGPT Image 13 may 2025, 07_09_42 p.m..png"
import Image from 'next/image';

const LoginPage = () => {
    return (
    <div className="flex flex-row items-center">
        <div className="w-1/2">
        <Image src={foto} alt="foto" width={400} height={200} className="object-cover w-full h-full" />
        </div>
        <div className="flex flex-col items-center justify-center w-1/2">
        <h1 className="text-4xl font-bold color-black">Login</h1>
        <LoginForm />
        </div>
    </div>
    )
};

export default LoginPage;