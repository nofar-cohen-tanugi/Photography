import express from 'express';
const router = express.Router();
import detailsController from '../controllers/detailsController';

router.get('/', detailsController.getDetailsData);

module.exports = router;
