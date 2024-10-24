import { loadStripe } from "@stripe/stripe-js";

export async function CheckoutPage({ lineItems }) {
  let stripePromise = null;

  let getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
    }
    return stripePromise;
  };

  const stripe = await getStripe();
  
  await stripe.redirectToCheckout({
    mode: "subscription", // Use subscription mode for recurring prices
    lineItems,
    successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl: window.location.origin
  });
  
}
