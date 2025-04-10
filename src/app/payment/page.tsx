"use client"
import CheckoutForm from "@/components/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { useSearchParams } from "next/navigation";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

function Paymentpage() {
    const searchParam = useSearchParams()
    const amount = searchParam.get("amount");
  return (
    <>
    <Elements  stripe={stripePromise} options={{mode: "payment", currency: "usd", amount:Number(amount)}} >
      <CheckoutForm  amount={Number(amount)}/>
    </Elements>
    </>
  )
}

export default Paymentpage

