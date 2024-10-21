import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PaymentForm = () => {
    const [amount, setAmount] = useState('');
    const [email, setEmail] = useState('');
    const [currency, setCurrency] = useState('USD');
    const [invoiceData, setInvoiceData] = useState(null);

    const link = invoiceData?.result?.link;

    console.log(invoiceData)

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://eb6b-103-111-224-32.ngrok-free.app/create-invoice', {
                amount,
                currency,
                email,
            });

            setInvoiceData(response.data);
            alert('Invoice created! Check your email for payment details.');
        } catch (error) {
            console.error('Error creating invoice:', error);
            alert('Failed to create invoice');
        }
    };

    return (
        <div>
            <h1 className='py-3 text-2xl text-center text-blue-500 font-bold'>Create Invoice</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Amount:</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Currency:</label>
                    <select
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                    >
                        <option value="USD">USD</option>
                        <option value="BTC">Bitcoin</option>
                        <option value="ETH">Ethereum</option>
                        {/* Add more currencies as needed */}
                    </select>
                </div>
                <button type="submit" className='bg-red-400 text-white px-5 py-1'>Create Invoice</button>
            </form>

            {invoiceData && (
                <div>
                    <h2>Invoice Details: {invoiceData.status}</h2>
                    <p>Invoice ID: {invoiceData?.result.uuid}</p>
                    <p>Amount: {invoiceData.result.amount}</p>
                    <p>Currency: {invoiceData.result.currency.name}</p>
                    <p>Invoice Link: {link}</p>
                    <p>Payment Link: <Link to={link} className='bg-blue-400 text-white px-5 py-1'>Pay Now</Link></p>
                </div>
            )}
        </div>
    );
};

export default PaymentForm;
