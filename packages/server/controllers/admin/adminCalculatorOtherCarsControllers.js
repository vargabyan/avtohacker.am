const { mongoose } = require('mongoose');
const AdminCalculatorOtherCarsSettings = require('../../models/adminCalculatorOtherCarsSettings');

const { ID_ADMIN_CALCULATOR_OTHER_CARS_SETTINGS } = process.env;

exports.postAdminCalculatorOtherCarsSettings = async (request, response) => {
  if (!request.body) return response.sendStatus(404);

  const result = await AdminCalculatorOtherCarsSettings.findByIdAndUpdate(
    ID_ADMIN_CALCULATOR_OTHER_CARS_SETTINGS,
    {
      diesel: request.body.diesel,
      gasoline: request.body.gasoline,
      hybrid: request.body.hybrid,
    }
  );

  if (!result) {
    await AdminCalculatorOtherCarsSettings.create({
      diesel: request.body.diesel,
      gasoline: request.body.gasoline,
      hybrid: request.body.hybrid,
    });
  }

  response.send({
    diesel: request.body.diesel,
    gasoline: request.body.gasoline,
    hybrid: request.body.hybrid,
  });
};

exports.getAdminCalculatorOtherCarsSettings = async (_request, response) => {
  let result = await AdminCalculatorOtherCarsSettings.findById(
    ID_ADMIN_CALCULATOR_OTHER_CARS_SETTINGS
  );

  if (!result) {
    result = await AdminCalculatorOtherCarsSettings.create({});
  }

  response.send({
    diesel: result.diesel,
    gasoline: result.gasoline,
    hybrid: result.hybrid,
  });
};

mongoose.disconnect();
