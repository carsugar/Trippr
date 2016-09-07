var secret_key = require('../../stripeConfig.js');
var stripe = require('stripe')(secret_key);

module.exports = {
  chargeCustomer: function(req, res) {
    stripe.tokens.create({
      card: {
        "number": req.body.number,
        "exp_month": req.body.exp_month,
        "exp_year": req.body.exp_year,
        "cvc": req.body.cvc
        // TEST CARD
        // "number": '4242424242424242',
        // "exp_month": 12,
        // "exp_year": 2017,
        // "cvc": '123'
      }
    }, function(err, token) {
      if (err) {
        res.status(500).send('There was an error accepting this card');
      } else {
        stripe.charges.create({
          amount: 2000,
          currency: "usd",
          source: token.id,
          description: "Charge for Trippr"
        }, function(err, charge) {
          if (err) {
            res.status(500).send('There was an error with this charge');
          } else {
            res.status(200).send('Succesfully charged');
          }
        });
      }
    });
  }
};
