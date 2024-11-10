// backend/stripe.js
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

module.exports = stripe;




// backend/routes/payment.js
const express = require("express");
const router = express.Router();
const stripe = require("../stripe");

router.post("/create-payment-intent", async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount, // amount in cents
      currency: "usd",
    });

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
