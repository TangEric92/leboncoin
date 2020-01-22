import React, { useState } from "react";
import {
  StripeProvider,
  Elements,
  CardElement,
  injectStripe
} from "react-stripe-elements";

const CheckoutForm = props => {
  const [complete, setComplete] = useState(false);
  console.log(props);
  return (
    <div>
      <CardElement />
      <button> Send</button>
    </div>
  );
};
const InjectedCheckoutForm = injectStripe(CheckoutForm);

function Paiement(props) {
  return (
    <div className="annonce">
      <StripeProvider apiKey="pk_test_FGCRmglhnxZaBQ75SC4gUKUu00YlJDefIK">
        <div>
          <h1>React Stripe Elements</h1>
          <Elements>{InjectedCheckoutForm}</Elements>
        </div>
      </StripeProvider>
    </div>
  );
}

export default Paiement;
