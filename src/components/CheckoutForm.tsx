'use client';

import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';

function CheckoutForm( {amount}:{amount:number}) {
  const stripe = useStripe();
  const elements = useElements();

  const [clientSecret, setClientSecret] = useState<string>('');
  const [error, setError] = useState<string>('');
  // const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    // Create PaymentIntent on the server
    fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount}),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
        if (data.clientSecret) {
          localStorage.setItem('paymentDetails', JSON.stringify({
            id: data.paymentId,
            date: data.created,
            amount: data.amount,
          }));
        }
      });
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    // Call elements.submit() immediately when the user clicks pay.
    const { error: submitError } = await elements.submit();
    if (submitError) {
      setError(submitError.message || 'Submission failed');
      return;
    }

    // Then confirm the payment.
    const { error: confirmError } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${window.location.origin}/payment-success`,
      },
    });

    if (confirmError) {
      setError(confirmError.message || 'Payment confirmation failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="p-10 flex justify-center flex-col gap-6">
        {clientSecret && <PaymentElement />}
        {error && <p className="text-red-600">{error}</p>}
        <button className="bg-black text-white p-5" type="submit">
          Payment
        </button>
      </div>
    </form>
  );
}

export default CheckoutForm;


// 'use client';

// import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
// import { useEffect, useState } from 'react';

// function CheckoutForm({ amount }: { amount: number }) {
//   const stripe = useStripe();
//   const elements = useElements();

//   const [clientSecret, setClientSecret] = useState<string>('');
//   const [error, setError] = useState<string>('');

//   useEffect(() => {
//     // Create PaymentIntent on the server
//     fetch('/api/create-payment-intent', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ amount }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setClientSecret(data.clientSecret);
//         if (data.clientSecret) {
//           localStorage.setItem('paymentDetails', JSON.stringify({
//             id: data.paymentId,
//             date: data.created,
//             amount: data.amount,
//           }));
//         }
//       })
//       .catch((err) => {
//         setError('Failed to fetch payment details');
//         console.error(err);
//       });
//   }, [amount]);

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (!stripe || !elements || !clientSecret) return;

//     // Submit payment when the user clicks pay.
//     const { error: submitError } = await elements.submit();
//     if (submitError) {
//       setError(submitError.message || 'Submission failed');
//       return;
//     }

//     // Confirm the payment
//     const { error: confirmError } = await stripe.confirmPayment({
//       elements,
//       clientSecret,
//       confirmParams: {
//         return_url: `${window.location.origin}/payment-success`,
//       },
//     });

//     if (confirmError) {
//       setError(confirmError.message || 'Payment confirmation failed');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="p-10 flex justify-center flex-col gap-6">
//         {clientSecret && <PaymentElement />}
//         {error && <p className="text-red-600">{error}</p>}
//         <button className="bg-black text-white p-5" type="submit" disabled={!stripe}>
//           Payment
//         </button>
//       </div>
//     </form>
//   );
// }

// export default CheckoutForm;
