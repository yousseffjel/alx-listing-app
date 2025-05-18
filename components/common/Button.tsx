import React from 'react';
import { ButtonProps } from '../../interfaces';

const Button: React.FC<ButtonProps> = ({ label, onClick, className = '' }) => {
    return (
        <button
            className={`px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition ${className}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;
