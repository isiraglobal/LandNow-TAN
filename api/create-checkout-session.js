const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'LandNow Membership',
              description: 'One-Time Membership — Private Network for Land & Water Rights Professionals',
            },
            unit_amount: 300,
          },
          quantity: 1,
        },
      ],
      success_url: `${req.headers.origin}/confirmation.html`,
      cancel_url: `${req.headers.origin}/index.html`,
    });

    res.json({ id: session.id });
  } catch (err) {
    console.error('Stripe session creation failed:', err);
    res.status(500).json({ error: 'Failed to create checkout session. Please try again.' });
  }
};
