import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const PaymentForm = ({ totalAmount, onPaymentSuccess, userInfo }) => {
    const [deliveryInstructions, setDeliveryInstructions] = useState("")
    const payment = async (token) => {
        try {
            console.log('tatti');
            await axios.post("http://localhost:8000/pay", {
                amount: totalAmount * 100,
                token: token,
            });
            onPaymentSuccess();
        } catch (error) {

            onPaymentSuccess();
        }
    };

    return (
        <div className="max-w-md mx-auto items-center mb-4">
            <input type="text" placeholder="Add Delivery instruction" value={deliveryInstructions} onChange={(e) => setDeliveryInstructions(e.target.value)} className="mb-4 mt-4  p-2 w-full border rounded-md focus:ring focus:ring-indigo-200"
            />
            <div className="flex justify-center">
                <div className="p-4 border rounded-md shadow-md ">
                    <StripeCheckout
                        stripeKey='pk_test_51Nm27XSFnto7KK5RK1BKQPskNbQB3orgwXtbpPmRZzzzOmsnmfPpxhOm0rFnjG5p7PGfBq9KPqkxoKWhDIMyUg1n00Aeg42ug2'
                        name="Shopoholics Online Shopping"
                        amount={totalAmount * 100}
                        label="Pay to Shopoholics"
                        description={`Your Payment amount is ${totalAmount}`}
                        token={payment}
                        email={userInfo.email}
                    />
                </div>
            </div>
        </div>
    );
};

export default PaymentForm;

