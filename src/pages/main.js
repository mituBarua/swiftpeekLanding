import { useEffect } from "react";
import { useSelector } from 'react-redux'
import Stripe from "react-stripe-checkout"
import { useRouter } from 'next/router'
import { selectToken } from '../store/user/user.selector'
import { api } from 'store/api';
import { toast } from 'react-toastify';
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import Checkout from "../containers/SaasAppDark/Checkout";
// const stripePromise = loadStripe("pk_test_51K7B1fFoSml33sh3emJEPy4jdwOlQ0y0lXq3Uhz6yWEzJ1YkrAyMyaaO9XWCeqdC5QAh3GNT7PkLxb8HBgL4ArjG00YRF3uhJo");
const main = () => {
    const sign_token = useSelector(selectToken)
    const router = useRouter();
    useEffect(() => {
        console.log(sign_token);
        if(!sign_token.JWT_token){
            router.push('/');
        }
    },[sign_token])
    const [ payment ] = api.usePayHandlerMutation();
    const tokenHandler = async (token) => {
        const resp = await payment({
            token:sign_token.JWT_token, 
            data:{
              refresh_Token : sign_token.refresh_Token,
            }
          });
        if(resp.data.success) {
            toast.success('Succssfully Subscribed!')
        }
    }
    return (
        <div>
            <Stripe
                stripeKey="pk_test_51MtKXWFjG6mwsBVpHefOyPtIxldVWjretB2Dku5iccrdJji7dLu69iSuzFdObpsMNp5hKV3RxxPDkajcHxAqFsTn00uQ3S1beq"
                // billingAddress
                name="STRIPE_INTEGRATION"
                description= 'MVStack'
                token = {tokenHandler}
                label = 'Subscribe'
            />
        </div>
    )
}

export default main;