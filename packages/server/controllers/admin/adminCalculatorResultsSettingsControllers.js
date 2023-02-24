const { mongoose } = require('mongoose');
const AdminCalculatorSettingsResult = require('../../models/adminCalculatorResultsSetings');

const { ID_ADMIN_CALCULATOR_SETTINGS_RESULT } = process.env;

exports.postCalculatorSettingSResult = async (request, response) => {
  if (!request.body) return response.sendStatus(404);

  const result = await AdminCalculatorSettingsResult.findByIdAndUpdate(
    ID_ADMIN_CALCULATOR_SETTINGS_RESULT,
    {
      auctionFee: request.body.auctionFee,
      shippingPrice: request.body.shippingPrice,
      Insurance: request.body.Insurance,
      serviceFee: request.body.serviceFee,
      customsDuty: request.body.customsDuty,
      vat: request.body.vat,
      ecoTax: request.body.ecoTax,
      brokerFee: request.body.brokerFee,
    }
  );

  if (!result) {
    AdminCalculatorSettingsResult.create(
      {
        auctionFee: request.body.auctionFee,
        shippingPrice: request.body.shippingPrice,
        Insurance: request.body.Insurance,
        serviceFee: request.body.serviceFee,
        customsDuty: request.body.customsDuty,
        vat: request.body.vat,
        ecoTax: request.body.ecoTax,
        brokerFee: request.body.brokerFee,
      },
      (err, doc) => doc
    );
  }

  response.send({
    auctionFee: request.body.auctionFee,
    shippingPrice: request.body.shippingPrice,
    Insurance: request.body.Insurance,
    serviceFee: request.body.serviceFee,
    customsDuty: request.body.customsDuty,
    vat: request.body.vat,
    ecoTax: request.body.ecoTax,
    brokerFee: request.body.brokerFee,
  });
};

exports.getCalculatorSettingSResult = async (_request, response) => {
  let result = await AdminCalculatorSettingsResult.findById(
    ID_ADMIN_CALCULATOR_SETTINGS_RESULT
  );

  if (!result) {
    result = await AdminCalculatorSettingsResult.create({});
  }

  response.send({
    auctionFee: result.auctionFee,
    shippingPrice: result.shippingPrice,
    Insurance: result.Insurance,
    serviceFee: result.serviceFee,
    customsDuty: result.customsDuty,
    vat: result.vat,
    ecoTax: result.ecoTax,
    brokerFee: result.brokerFee,
  });
};

mongoose.disconnect();
