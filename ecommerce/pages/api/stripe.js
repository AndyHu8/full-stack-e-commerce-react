import Stripe from 'stripe';

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log("Body:", req.body);
    try {
      const params = {
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_options:[
            { shipping_rate: 'shr_1MEeEvEkf37UoY2boPE6BWxg' },
        ],
        line_items: req.body.map((item) => {

          //Image Ref durch echtes img ersetzen
          const img = item.image[0].asset._ref;
          const newImage = img.replace('image-', 'https://cdn.sanity.io/images/zlaakrzq/production/').replace('-webp', '.webp') //Endung von Images ändern (später auch bei .jpg, .png)
          console.log('IMAGE', newImage);

          //Zusatzinformationen für die Items
          return {
            price_data: {
              currency: 'usd',
              product_data: {
                name: item.name,
                images: [newImage]
              },
              unit_amount: item.price * 100
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: item.quantity
          }
        }),
        // success_url: `${req.headers.origin}/success`,
        // cancel_url: `${req.headers.origin}/canceled`,
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      }

      //Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
      //res.redirect(303, session.url);
      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}

//Zum Testen beim Checkout: Card Information mit 42 als Zahlenabfolge benutzen
//Beleg sind bei stripe.com unter Zahlungen sichtbar