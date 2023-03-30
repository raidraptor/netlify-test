// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Stripe from 'stripe';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  url: string | null
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req)
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!!, {
    apiVersion: '2022-11-15',
  });
  const items = req.body
  const lineItems = items.map(
    function(x: { name: any; price: number; quantity: any; }){return {price_data: {
          currency: "usd",
          product_data: {
            name:x.name
          },
          unit_amount:x.price*100
        },
        quantity:x.quantity
      }
    })

    
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "https://moemakura.netlify.app/success",
    cancel_url: "https://moemakura.netlify.app/cancel",
  });

  return res.status(200).json({ url:session.url })
}
