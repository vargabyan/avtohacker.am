const { mongoose } = require('mongoose');
const AdminCalculatorFullElectricCarsSettings = require('../../models/adminCalculatorFullElectricCarsSettings');

const { ID_ADMIN_CALCULATOR_FULL_ELECTRIC_CARS_SETTINGS } = process.env;

exports.postAdminCalculatorFullElectricCarsSettings = async (
  request,
  response
) => {
  if (!request.body) return response.sendStatus(404);

  const result =
    await AdminCalculatorFullElectricCarsSettings.findByIdAndUpdate(
      ID_ADMIN_CALCULATOR_FULL_ELECTRIC_CARS_SETTINGS,
      {
        full_electric: request.body.full_electric,
      }
    );

  if (!result) {
    await AdminCalculatorFullElectricCarsSettings.create({
      full_electric: request.body.full_electric,
    });
  }

  response.send({
    full_electric: request.body.full_electric,
  });
};

exports.getAdminCalculatorFullElectricCarsSettings = async (
  _request,
  response
) => {
  let result = await AdminCalculatorFullElectricCarsSettings.findById(
    ID_ADMIN_CALCULATOR_FULL_ELECTRIC_CARS_SETTINGS
  );

  if (!result) {
    result = await AdminCalculatorFullElectricCarsSettings.create({});
  }

  response.send({
    full_electric: result.full_electric,
  });
};

mongoose.disconnect();
