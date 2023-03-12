const { Router } = require('express');

const homeRouter = Router();
const {
  postCalculation,
  getCalculation,
} = require('../controllers/home/calculateController');
const {
  postSendToMail,
  postFileSandToMail,
} = require('../controllers/home/sendToMailController');

homeRouter.post('/calculate', postCalculation);
homeRouter.get('/calculate', getCalculation);
homeRouter.post('/send-mail', postSendToMail);
homeRouter.post('/img', postFileSandToMail);

module.exports = homeRouter;
