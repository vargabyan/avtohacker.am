const { mongoose } = require('mongoose');
const AdminCalculatorAuctionSettings = require('../../models/adminCalculatorAuctionSettings');
const AdminCalculatorSelectLocationSettings = require('../../models/adminCalculatorSelectLocationSettings');
const AdminCalculatorFullElectricCarsSettings = require('../../models/adminCalculatorFullElectricCarsSettings');
const AdminCalculatorOtherCarsSettings = require('../../models/adminCalculatorOtherCarsSettings');
const AdminCalculatorSettingsResult = require('../../models/adminCalculatorResultsSetings');

const { ID_ADMIN_CALCULATOR_AUCTION_SETTINGS } = process.env;

exports.postCalculation = async (request, response) => {
  if (!request.body) return response.sendStatus(404);

  const {
    auctionPrice,
    carPrice,
    engine,
    highPermeability,
    selectAge,
    selectCarType,
    selectFuelType,
    shippingPrice,
  } = request.body;

  const percentCalculatorFullElectricCars =
    await AdminCalculatorFullElectricCarsSettings.findOne({});
  const percentCalculatorOtherCars =
    await AdminCalculatorOtherCarsSettings.findOne({});
  const percentCalculatorResult = await AdminCalculatorSettingsResult.findOne(
    {}
  );
  let percentCustomsDuty;

  if (selectFuelType === 'full_electric') {
    percentCustomsDuty =
      percentCalculatorFullElectricCars.full_electric[selectCarType][selectAge];
  } else {
    percentCustomsDuty =
      percentCalculatorOtherCars[selectFuelType][selectCarType][selectAge];
  }

  const auctionCarShippingPrice = auctionPrice + carPrice + shippingPrice;

  const customsDuty = Math.round(
    (auctionCarShippingPrice / 100) * percentCustomsDuty
  );

  const insurance = Math.round(
    (auctionCarShippingPrice / 100) * percentCalculatorResult.Insurance
  );
  const serviceFee = Math.round(
    (auctionCarShippingPrice / 100) * percentCalculatorResult.serviceFee
  );
  const vat = Math.round(
    (((auctionCarShippingPrice / 100) * 20) / 100) * percentCalculatorResult.vat
  );
  const ecoTax = Math.round(
    (auctionCarShippingPrice / 100) * percentCalculatorResult.ecoTax
  );
  const { brokerFee } = percentCalculatorResult;
  const totalAmd = Math.round(
    (auctionCarShippingPrice +
      insurance +
      serviceFee +
      customsDuty +
      vat +
      ecoTax +
      brokerFee) *
      390
  );
  const totalUsd =
    auctionCarShippingPrice +
    insurance +
    serviceFee +
    customsDuty +
    vat +
    ecoTax +
    brokerFee;

  // const customsDuty = auctionPrice + carPrice + shippingPrice / input
  // const vat = auctionPrice + carPrice + shippingPrice / inpit
  // const Insurance = input;
  // const ecoTax = input;

  // const rastamoki_tokos = 'carPrice / 20%  +  shippingPrice / 20%';
  // const bnapahpanakan = 'carPrice - 2%';
  // const nds = '';
  // const serviceFee = 'minchev 20000 300, 20000 ic avel tokosov 1.5 orinak';

  response.send({
    calculatorResults: {
      carPrice,
      auctionFee: auctionPrice,
      shippingPrice,
      insurance,
      serviceFee,
      customsDuty,
      vat,
      ecoTax,
      brokerFee,
      totalAmd,
      totalUsd,
    },
  });
};

exports.getCalculation = async (_request, response) => {
  const selectLocationResult = await AdminCalculatorSelectLocationSettings.find(
    {}
  );

  const selectAuctionPriceResult =
    await AdminCalculatorAuctionSettings.findById(
      ID_ADMIN_CALCULATOR_AUCTION_SETTINGS
    );

  await response.send({
    selectLocation: selectLocationResult.map((index) => ({
      price_sedan: index.price_sedan,
      price_suv: index.price_suv,
      price_pickup: index.price_pickup,
      price_motorcycle: index.price_motorcycle,
      name: index.name,
    })),
    selectAuctionPrice: {
      iaa: selectAuctionPriceResult.iaa,
      copart: selectAuctionPriceResult.copart,
      korea: selectAuctionPriceResult.korea,
    },
  });
};

mongoose.disconnect();
