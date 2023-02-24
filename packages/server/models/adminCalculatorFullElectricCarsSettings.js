const { Schema, model } = require('mongoose');

const { ID_ADMIN_CALCULATOR_FULL_ELECTRIC_CARS_SETTINGS } = process.env;

const adminCalculatorFullElectricCarsSettingsSchema = new Schema(
  {
    _id: {
      type: String,
      default: ID_ADMIN_CALCULATOR_FULL_ELECTRIC_CARS_SETTINGS,
    },

    full_electric: Object({
      motorcycle: Object({
        ageFrom_5: { type: Array, default: ['100, 20'] },
        age_5_10: { type: Array, default: ['100, 20'] },
        age_10_15: { type: Array, default: ['100, 20'] },
      }),
      sedan: Object({
        ageFrom_5: { type: Array, default: ['100, 20'] },
        age_5_10: { type: Array, default: ['100, 20'] },
        age_10_15: { type: Array, default: ['100, 20'] },
      }),
      pickup: Object({
        ageFrom_5: { type: Array, default: ['100, 20'] },
        age_5_10: { type: Array, default: ['100, 20'] },
        age_10_15: { type: Array, default: ['100, 20'] },
      }),
      suv: Object({
        ageFrom_5: { type: Array, default: ['100, 20'] },
        age_5_10: { type: Array, default: ['100, 20'] },
        age_10_15: { type: Array, default: ['100, 20'] },
      }),
    }),
  },
  {
    versionKey: false,
    capped: false,
  }
);

const AdminCalculatorFullElectricCarsSettings = model(
  'admin_calculator_full_electric_cars_settings',
  adminCalculatorFullElectricCarsSettingsSchema
);

module.exports = AdminCalculatorFullElectricCarsSettings;
