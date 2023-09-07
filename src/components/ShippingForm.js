import React, { useState } from 'react';

const ShippingForm = ({ onNext }) => {
    const [shippingInfo, setShippingInfo] = useState({
        name: '',
        address: '',
        city: '',
        state: '',
        postalCode: '',
    });
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setShippingInfo({ ...shippingInfo, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};


        if (!shippingInfo.name) {
            newErrors.name = 'Name is required';
        }
        if (!shippingInfo.address) {
            newErrors.address = 'Address is required';
        }
        if (!shippingInfo.city) {
            newErrors.city = 'City is required';
        }
        if (!shippingInfo.state) {
            newErrors.state = 'State is required';
        }
        if (!shippingInfo.postalCode) {
            newErrors.postalCode = 'Postal Code is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            onNext();
        }
    };

    return (
        <div className="max-w-md mx-auto ">
            <h2 className="text-2xl font-medium mt-4 mb-4">Shipping Information</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4 mt-4">
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={shippingInfo.name}
                        onChange={handleInputChange}
                        className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-200"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Address</label>
                    <input
                        type="text"
                        name="address"
                        value={shippingInfo.address}
                        onChange={handleInputChange}
                        className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-200"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">City</label>
                    <input
                        type="text"
                        name="city"
                        value={shippingInfo.city}
                        onChange={handleInputChange}
                        className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-200"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">State</label>
                    <input
                        type="text"
                        name="state"
                        value={shippingInfo.state}
                        onChange={handleInputChange}
                        className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-200"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Postal Code</label>
                    <input
                        type="text"
                        name="postalCode"
                        value={shippingInfo.postalCode}
                        onChange={handleInputChange}
                        className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-200"
                        required
                    />
                </div>
                <div className="mt-4">
                    <button
                        type="submit"
                        className="'text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300'">
                        Next
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ShippingForm;

