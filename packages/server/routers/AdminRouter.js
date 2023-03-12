const { Router } = require('express');
const {
  postAdminAuth,
  getAdminAuth,
  postToken,
} = require('../controllers/admin/adminAuthController');
const {
  postCalculatorAuctionSettings,
  getCalculatorAuctionSettings,
} = require('../controllers/admin/adminCalculatorAuctionSettingsControllers');
const {
  postAdminCalculatorFullElectricCarsSettings,
  getAdminCalculatorFullElectricCarsSettings,
} = require('../controllers/admin/adminCalculatorFullElectricCarsControllers');
const {
  postAdminCalculatorOtherCarsSettings,
  getAdminCalculatorOtherCarsSettings,
} = require('../controllers/admin/adminCalculatorOtherCarsControllers');
const {
  postCalculatorSettingSResult,
  getCalculatorSettingSResult,
} = require('../controllers/admin/adminCalculatorResultsSettingsControllers');
const {
  postAdminCalculatorSelectLocationSettings,
  getAdminCalculatorSelectLocationSettings,
  deleteAdminCalculatorSelectLocationSettings,
} = require('../controllers/admin/adminCalculatorSelectLocationSettingsControllers');

const AdminRouter = Router();

AdminRouter.post('/calculator-settings-result', postCalculatorSettingSResult);
AdminRouter.get('/calculator-settings-result', getCalculatorSettingSResult);
AdminRouter.post('/calculator-auction-settings', postCalculatorAuctionSettings);
AdminRouter.get('/calculator-auction-settings', getCalculatorAuctionSettings);
AdminRouter.post(
  '/calculator-select-Location-settings',
  postAdminCalculatorSelectLocationSettings
);
AdminRouter.get(
  '/calculator-select-Location-settings',
  getAdminCalculatorSelectLocationSettings
);
AdminRouter.delete(
  '/calculator-select-Location-settings',
  deleteAdminCalculatorSelectLocationSettings
);
AdminRouter.post(
  '/calculator-full-electric-cars-settings',
  postAdminCalculatorFullElectricCarsSettings
);
AdminRouter.get(
  '/calculator-full-electric-cars-settings',
  getAdminCalculatorFullElectricCarsSettings
);
AdminRouter.post(
  '/calculator-other-cars-settings',
  postAdminCalculatorOtherCarsSettings
);
AdminRouter.get(
  '/calculator-other-cars-settings',
  getAdminCalculatorOtherCarsSettings
);
AdminRouter.post('/auth', postAdminAuth);
AdminRouter.get('/auth', getAdminAuth);
AdminRouter.post('/token', postToken);

module.exports = AdminRouter;
