import React from 'react';
import './Loader.css';

const Loader: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen loader">
            <div className="flex p-5 space-x-3 rounded-full shadow-lg bg-red-50">
                <div className="w-5 h-5 bg-red-500 rounded-full shadow-md animate-bounce"></div>
                <div className="w-5 h-5 bg-red-500 rounded-full shadow-md animate-bounce"></div>
                <div className="w-5 h-5 bg-red-500 rounded-full shadow-md animate-bounce"></div>
            </div>
        </div>
    )
}
export default Loader;