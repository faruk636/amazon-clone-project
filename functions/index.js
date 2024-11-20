const {onRequest} = require("firebase-functions/v2/https");
const express=require('express')
const cors=require('cors')
const stripe=require('stripe')('sk_test_51QIMXjEyIfxdSU9hYIDxeZuc0oHiA9TGdYJIMGh9Jsv5oYP56UyYCvkFhOqaoeRpYL1ZKUfRXf4LzR13mKPL4l6X00pfqgUlXa')

const app=express()

app.use(cors({origin:true}))
app.use(express.json())

app.get('/',(req,res)=>res.status(200).send('Hello world'))

app.post('/payments/create', async (req, res) => {
    const total = req.body.total;

    console.log(total);
    

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: total,
            currency: 'usd',
        });

        res.status(201).send({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        console.error("PaymentIntent creation error:", error);
        res.status(500).send({ error: "Failed to create PaymentIntent" });
    }
});

exports.api=onRequest(app)

// http://127.0.0.1:5001/clone-project-1729a/us-central1/api
// http://127.0.0.1:5001/clone-project-1729a/us-central1/api