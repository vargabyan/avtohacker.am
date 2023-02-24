const { mongoose } = require('mongoose');
const AdminCalculatorAuctionSettings = require('../../models/adminCalculatorAuctionSettings');

const { ID_ADMIN_CALCULATOR_AUCTION_SETTINGS } = process.env;

exports.postCalculatorAuctionSettings = async (request, response) => {
  if (!request.body) return response.sendStatus(404);

  const result = await AdminCalculatorAuctionSettings.findByIdAndUpdate(
    ID_ADMIN_CALCULATOR_AUCTION_SETTINGS,
    {
      iaa: request.body.iaa,
      copart: request.body.copart,
      korea: request.body.korea,
    }
  );

  if (!result) {
    AdminCalculatorAuctionSettings.create({
      iaa: request.body.iaa,
      copart: request.body.copart,
      korea: request.body.korea,
    });
  }

  response.send({
    iaa: request.body.iaa,
    copart: request.body.copart,
    korea: request.body.korea,
  });
};

exports.getCalculatorAuctionSettings = async (_request, response) => {
  let result = await AdminCalculatorAuctionSettings.findById(
    ID_ADMIN_CALCULATOR_AUCTION_SETTINGS
  );

  if (!result) {
    result = await AdminCalculatorAuctionSettings.create({});
  }

  response.send({
    iaa: result.iaa,
    copart: result.copart,
    korea: result.korea,
  });
};

mongoose.disconnect();
