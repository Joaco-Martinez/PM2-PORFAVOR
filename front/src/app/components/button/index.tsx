import React from "react";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    textContent: string;
    variant: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ textContent, variant, ...props }) => {
    const cssButton = {
        primary: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
        secondary: "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
    }

    return (
        <button className={cssButton[variant]} {...props}>
            {textContent}
        </button>
    );
}


export default Button