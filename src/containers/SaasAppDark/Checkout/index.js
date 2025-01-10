import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import { Button, Input } from "antd";
import Button from 'common/components/Button';
import Input from 'common/components/Input';
import React, { useState } from "react";
import Container from 'common/components/UI/Container';
import {Section} from './checkout.style'
const Checkout = () => {
  
  // collect data from the user
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [priceId, setPriceId] = useState("");
  
  // stripe items
  const stripe = useStripe();
  const elements = useElements();

  // main function
  const createSubscription = async () => {
    try {
      
      // create a payment method
    //   const paymentMethod = await stripe?.createPaymentMethod({
    //     type: "card",
    //     card: elements.getElement(CardElement)!,
    //     billing_details: {
    //       name,
    //       email,
    //     },
    //   });

      // call the backend to create subscription
    //   const response = await fetch("http://localhost:4000/create-subscription", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       paymentMethod: paymentMethod?.paymentMethod?.id,
    //       name,
    //       email,
    //       priceId
    //     }),
    //   }).then((res) => res.json());

    //   const confirmPayment = await stripe?.confirmCardPayment(
    //     response.clientSecret
    //   );

    //   if (confirmPayment?.error) {
    //     alert(confirmPayment.error.message);
    //   } else {
    //     alert("Success! Check your email for the invoice.");
    //   }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Section>
        <Container width="1300px">
            <div className="grid gap-4 m-auto">
            <Input  // this should not be a text field. maybe a radio button ro something
                placeholder="Price Id"
                inputType="text"
                isMaterial
                value={name}
                onChange={(e) => setPriceId(e.target.value)}
            />
            <input
                placeholder="Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
                placeholder="Email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <CardElement className="cardelement"/>
            <button onClick={createSubscription} disabled={!stripe}>
                Subscribe
            </button>
            </div>
        </Container>
    </Section>
  );
}

export default Checkout;