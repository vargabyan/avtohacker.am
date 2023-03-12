const { Schema, model } = require('mongoose');

const { ID_ADMIN_CALCULATOR_OTHER_CARS_SETTINGS } = process.env;

const adminCalculatorOtherCarsSettingsSchema = new Schema(
  {
    _id: { type: String, default: ID_ADMIN_CALCULATOR_OTHER_CARS_SETTINGS },

    diesel: Object({
      motorcycle: Object({
        ageFrom_3: { type: Array, default: { price: '100', percent: '20' } },
        age_3_5: { type: Array, default: { price: '100', percent: '20' } },
        age_5_7: { type: Array, default: { price: '100', percent: '20' } },
        age_7_to: { type: Array, default: { price: '100', percent: '20' } },
      }),
      sedan: Object({
        ageFrom_3: { type: Array, default: { price: '100', percent: '20' } },
        age_3_5: { type: Array, default: { price: '100', percent: '20' } },
        age_5_7: { type: Array, default: { price: '100', percent: '20' } },
        age_7_to: { type: Array, default: { price: '100', percent: '20' } },
      }),
      pickup: Object({
        ageFrom_3: { type: Array, default: { price: '100', percent: '20' } },
        age_3_5: { type: Array, default: { price: '100', percent: '20' } },
        age_5_7: { type: Array, default: { price: '100', percent: '20' } },
        age_7_to: { type: Array, default: { price: '100', percent: '20' } },
      }),
      suv: Object({
        highPermeability: {
          type: Array,
          default: { price: '100', percent: '20' },
        },
        ageFrom_3: { type: Array, default: { price: '100', percent: '20' } },
        age_3_5: { type: Array, default: { price: '100', percent: '20' } },
        age_5_7: { type: Array, default: { price: '100', percent: '20' } },
        age_7_to: { type: Array, default: { price: '100', percent: '20' } },
      }),
    }),

    gasoline: Object({
      motorcycle: Object({
        ageFrom_3: { type: Array, default: { price: '100', percent: '20' } },
        age_3_5: { type: Array, default: { price: '100', percent: '20' } },
        age_5_7: { type: Array, default: { price: '100', percent: '20' } },
        age_7_to: { type: Array, default: { price: '100', percent: '20' } },
      }),
      sedan: Object({
        ageFrom_3: { type: Array, default: { price: '100', percent: '20' } },
        age_3_5: { type: Array, default: { price: '100', percent: '20' } },
        age_5_7: { type: Array, default: { price: '100', percent: '20' } },
        age_7_to: { type: Array, default: { price: '100', percent: '20' } },
      }),
      pickup: Object({
        ageFrom_3: { type: Array, default: { price: '100', percent: '20' } },
        age_3_5: { type: Array, default: { price: '100', percent: '20' } },
        age_5_7: { type: Array, default: { price: '100', percent: '20' } },
        age_7_to: { type: Array, default: { price: '100', percent: '20' } },
      }),
      suv: Object({
        highPermeability: {
          type: Array,
          default: { price: '100', percent: '20' },
        },
        ageFrom_3: { type: Array, default: { price: '100', percent: '20' } },
        age_3_5: { type: Array, default: { price: '100', percent: '20' } },
        age_5_7: { type: Array, default: { price: '100', percent: '20' } },
        age_7_to: { type: Array, default: { price: '100', percent: '20' } },
      }),
    }),

    hybrid: Object({
      motorcycle: Object({
        ageFrom_3: { type: Array, default: { price: '100', percent: '20' } },
        age_3_5: { type: Array, default: { price: '100', percent: '20' } },
        age_5_7: { type: Array, default: { price: '100', percent: '20' } },
        age_7_to: { type: Array, default: { price: '100', percent: '20' } },
      }),
      sedan: Object({
        ageFrom_3: { type: Array, default: { price: '100', percent: '20' } },
        age_3_5: { type: Array, default: { price: '100', percent: '20' } },
        age_5_7: { type: Array, default: { price: '100', percent: '20' } },
        age_7_to: { type: Array, default: { price: '100', percent: '20' } },
      }),
      pickup: Object({
        ageFrom_3: { type: Array, default: { price: '100', percent: '20' } },
        age_3_5: { type: Array, default: { price: '100', percent: '20' } },
        age_5_7: { type: Array, default: { price: '100', percent: '20' } },
        age_7_to: { type: Array, default: { price: '100', percent: '20' } },
      }),
      suv: Object({
        highPermeability: {
          type: Array,
          default: { price: '100', percent: '20' },
        },
        ageFrom_3: { type: Array, default: { price: '100', percent: '20' } },
        age_3_5: { type: Array, default: { price: '100', percent: '20' } },
        age_5_7: { type: Array, default: { price: '100', percent: '20' } },
        age_7_to: { type: Array, default: { price: '100', percent: '20' } },
      }),
    }),
  },
  {
    versionKey: false,
    capped: false,
  }
);

const AdminCalculatorOtherCarsSettings = model(
  'admin_calculator_other_cars_settings',
  adminCalculatorOtherCarsSettingsSchema
);

module.exports = AdminCalculatorOtherCarsSettings;
