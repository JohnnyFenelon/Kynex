const express = require('express')
const Stripe = require('stripe')
const router = express.Router()
const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

const priceMap = {
  'english-convo': 'price_xxxx',
  'summer-work': 'price_yyyy',
  'call-center': 'price_zzzz',
  'programmer-cert': 'price_aaaa'
}

router.post('/create-checkout-session', async (req, res) => {
  const { priceId, mode } = req.body
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode,
    line_items: [{ price: priceMap[priceId], quantity: 1 }],
    success_url: process.env.CLIENT_URL + '/?success=true',
    cancel_url: process.env.CLIENT_URL + '/?canceled=true'
  })
  res.json({ sessionId: session.id })
})

module.exports = router