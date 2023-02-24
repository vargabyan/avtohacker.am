const { Schema, model } = require('mongoose');

const { ID_ADMIN_CALCULATOR_AUCTION_SETTINGS } = process.env;

const adminCalculatorAuctionSettingsSchema = new Schema(
  {
    _id: { type: String, default: ID_ADMIN_CALCULATOR_AUCTION_SETTINGS },
    iaa: { type: Number, default: 10 },
    copart: { type: Number, default: 10 },
    korea: { type: Number, default: 10 },
  },
  {
    versionKey: false,
    capped: { max: 1 },
  }
);

const AdminCalculatorAuctionSettings = model(
  'admin_calculator_auction_settings',
  adminCalculatorAuctionSettingsSchema
);

module.exports = AdminCalculatorAuctionSettings;
