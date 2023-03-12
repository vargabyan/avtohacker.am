const { Schema, model } = require('mongoose');

const adminCalculatorSelectLocationSettingsSchema = new Schema(
  [
    {
      price_sedan: Number,
      price_suv: Number,
      price_pickup: Number,
      price_motorcycle: Number,
      value: Number,
      name: String,
    },
  ],
  {
    versionKey: false,
  }
);
adminCalculatorSelectLocationSettingsSchema.set('strictQuery', true);

const AdminCalculatorSelectLocationSettings = model(
  'admin_calculator_select_location_settings',
  adminCalculatorSelectLocationSettingsSchema
);
module.exports = AdminCalculatorSelectLocationSettings;
