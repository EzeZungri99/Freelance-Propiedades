const { RealState } = require("../db");
const mercadopago = require("mercadopago");
require('dotenv').config();
const {
  TOKEN_MP
} = process.env;

const createOrderHandler = async (req, res) => {
  const { id } = req.params;
  mercadopago.configure({
    access_token:
      TOKEN_MP,
  });

  try {

    const property = await RealState.findOne({ where: { id: id } });
    const price = parseFloat(property?.price) * 0.001;
    
    const result = await mercadopago.preferences.create({
      items: [
        {
          title: id,
          quantity: 1,
          currency_id: property?.currency,
          unit_price: price,
        },
      ],notification_url:'https://bienesraices-production-9eb3.up.railway.app/webhook'
    });

    const preferenceId = result.response.id;

    // const handleReservarClick = async () => {
    //   try {
    //     const response = await axios.get('http://localhost:3001/createOrder/:id');
    //     const preferenceId = response.data;
    //     const redirectUrl = `https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=${preferenceId}`;
    //     window.location.href = redirectUrl;
    //   } catch (error) {
    //     console.error(error);
    //     // Manejar el error de acuerdo a tus necesidades
    //   }
    // };

    res.send(preferenceId);
    // res.redirect(redirectUrl);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al crear la orden");
  }
};


const webhookHandler=async(req, res)=>{
  // const payment= req.query.payment_id;
  console.log(req.body);
  
  // try {
  
  //   //   const data= await  axios.get(`https://api.mercadopago.com/v1/payments/${payment}`, {
  //   //     headers: {
  //   //         'Authorization': `Bearer TEST-4304274978344220-062414-3619cd7e5c484d5fcb746d26d1cc68c0-1406402853`
  //   //     }
  //   // }).then(response => {
  //   //     console.log(response.data);
  //   // }).catch(error => {
  //   //     console.error(error);
  //   // });
  //   console.log(payment);
    
    res.status(200).send("OK");
  // } catch (error) {
  //   console.log(error);
  
  // }
  };

module.exports = { createOrderHandler , webhookHandler};
