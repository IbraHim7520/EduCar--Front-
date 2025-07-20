import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import useAuth from "../CustomHooks/useAuth"
import { useNavigate } from 'react-router';
import { useMutation } from '@tanstack/react-query';

const CheckoutForm = ({ handleCloseModal, totalPrice, data }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const [clientSecret, SetClientSecret] = useState();
    const { User } = useAuth()
    const navigate = useNavigate()
    const createPaymentMutation = useMutation({
        mutationFn: async (data) => {
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/create-payment-intent`,
                { data }
            );
            return response.data.clientSecret;
        },
        onSuccess: (clientSecret) => {
            SetClientSecret(clientSecret); // set state on success
        },
        onError: (error) => {
            console.error("Payment intent creation failed:", error);
        },
    });

useEffect(() => {
  if (data) {
    createPaymentMutation.mutate(data);
  }
}, [data, createPaymentMutation]);


    const handleSubmit = async (event) => {
        setLoading(true)
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setLoading(false)
        } else {
            //  console.log('[PaymentMethod]', paymentMethod);
        }
        //rcived mony from user card:
        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: User?.displayName,
                    email: User?.email
                }
            }
        })

        const setPaymentInforToDatabase = async () => {
           
            const PaymentDetails = {
                StudentName: User?.displayName,
                StudentEmail: User?.email,
                PaidAmount: data?.ClassPrice,
                TransactionID: result?.paymentIntent?.id,
                Currency: result?.paymentIntent?.currency
            }
            const response = await axios.put(`${import.meta.env.VITE_API_URL}/class-enrollment/${data?._id}`, {PaymentDetails})
            if(response?.data?.modifiedCount > 0){
            toast.success("Successfully Enrolled.")
            setLoading(false)
            handleCloseModal()
            navigate("/")
            }
        }
        if (result?.paymentIntent?.status === "succeeded") {
            setPaymentInforToDatabase()
        }else{
            toast.error("Unable to enroll the class!")
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                className='text-2xl py-5 text-gray-800 font-semibold'
            />
            <div className="flex justify-between items-center">
                <button
                    disabled={!stripe || loading}
                    className='btn btn-primary'>
                    {
                        loading ? <span className='loading loading-spinner text-white text-center'></span>
                            :
                            `Pay ${totalPrice}`
                    }
                </button>
                <button onClick={handleCloseModal} className='btn btn-error text-white'>Cancel</button>
            </div>
        </form>
    );
};

export default CheckoutForm;