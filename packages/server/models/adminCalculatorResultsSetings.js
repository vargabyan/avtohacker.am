const { Schema, model } = require('mongoose');

const { ID_ADMIN_CALCULATOR_SETTINGS_RESULT } = process.env;

const adminCalculatorSettingsResultSchema = new Schema(
  {
    _id: { type: String, default: ID_ADMIN_CALCULATOR_SETTINGS_RESULT },
    auctionFee: { type: Number, default: 1 },
    shippingPrice: { type: Number, default: 1 },
    Insurance: { type: Number, default: 1 },
    serviceFee: { type: Number, default: 1 },
    customsDuty: { type: Number, default: 1 },
    vat: { type: Number, default: 1 },
    ecoTax: { type: Number, default: 1 },
    brokerFee: { type: Number, default: 1 },
  },
  {
    versionKey: false,
    capped: { max: 1 },
  }
);
adminCalculatorSettingsResultSchema.set('strictQuery', true);

const AdminCalculatorSettingsResult = model(
  'admin_calculator_settings_result',
  adminCalculatorSettingsResultSchema
);
module.exports = AdminCalculatorSettingsResult;
