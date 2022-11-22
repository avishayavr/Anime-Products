const express = require("express");
const Stripe = require("stripe");
require("dotenv").config();

const router = express.Router();

const stripe = Stripe('sk_test_51M6hOFBzkRWCspGOr4OFfy4yCb2nFOlc6K5Ik17yI2LjX8rUTfdyH90mVG52ZfNDK3SstDUKNGuSYvk7cFghB3eP00JkE9v2Sm');

router.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "T-shirt",
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${process.env.CLIENT_URL}/checkout-success`,
    cancel_url: `${process.env.CLIENT_URL}/ /`,
  });

  console.log(process.env.STRIPE_KEY);

  res.send({ url: session.url });
});

module.exports = router;
