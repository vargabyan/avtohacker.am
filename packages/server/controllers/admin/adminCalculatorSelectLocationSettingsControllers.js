const { mongoose } = require('mongoose');
const AdminCalculatorSelectLocationSettings = require('../../models/adminCalculatorSelectLocationSettings');

exports.postAdminCalculatorSelectLocationSettings = async (
  request,
  response
) => {
  if (!request.body) return response.sendStatus(404);

  const count = await AdminCalculatorSelectLocationSettings.count({});

  let result = await AdminCalculatorSelectLocationSettings.findOneAndUpdate(
    { name: request.body.name },
    {
      price_sedan: request.body.price_sedan,
      price_suv: request.body.price_suv,
      price_pickup: request.body.price_pickup,
      price_motorcycle: request.body.price_motorcycle,
      name: request.body.name,
    }
  );

  if (!result) {
    await AdminCalculatorSelectLocationSettings.create({
      price_sedan: request.body.price_sedan,
      price_suv: request.body.price_suv,
      price_pickup: request.body.price_pickup,
      price_motorcycle: request.body.price_motorcycle,
      value: count,
      name: request.body.name,
    });
  }

  result = await AdminCalculatorSelectLocationSettings.find({});

  response.send(result);
};

exports.getAdminCalculatorSelectLocationSettings = async (
  _request,
  response
) => {
  const result = await AdminCalculatorSelectLocationSettings.find({});

  response.send(result);
};

exports.deleteAdminCalculatorSelectLocationSettings = async (
  request,
  response
) => {
  if (!request.body) return response.sendStatus(404);
  let result = await AdminCalculatorSelectLocationSettings.findOneAndDelete({
    name: request.body.name,
  });

  result = await AdminCalculatorSelectLocationSettings.find({});

  response.send(result);
};

mongoose.disconnect();
