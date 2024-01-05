// components/Popup.tsx

import React from 'react';

interface PopupProps {
    onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
    return (
        <div className="popup">
            <div className="popup-content p-6 bg-white rounded shadow-md">
                <span
                    className="close absolute top-2 right-2 text-gray-600 cursor-pointer"
                    onClick={onClose}
                >
                    &times;
                </span>
                {/* Your sign-up form goes here */}
                <h2 className="text-2xl font-bold mb-4">Sign Up for Waitlist</h2>
                <form id="signupForm">
                    {/* Add your form fields here */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Popup;
