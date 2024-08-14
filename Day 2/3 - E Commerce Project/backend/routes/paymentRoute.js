import express from "express";
import {createOrder} from '../controllers/createOrder.js'
import {getApiKey} from '../controllers/getApiKey.js'
import {verifyPayment} from '../controllers/verifyPayment.js'

const router  = express.Router();

router.post('/createOrder' , createOrder);
router.get('/getApiKey' , getApiKey);
router.post('/verifyPayment' , verifyPayment);

export default router;