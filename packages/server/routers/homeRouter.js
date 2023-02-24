const { Router } = require('express');

const homeRouter = Router();
const {
  postCalculation,
  getCalculation,
} = require('../controllers/home/calculateController');

homeRouter.post('/calculate', postCalculation);
homeRouter.get('/calculate', getCalculation);

module.exports = homeRouter;
