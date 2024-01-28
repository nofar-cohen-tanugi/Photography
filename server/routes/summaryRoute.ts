import express from 'express';
const router = express.Router();
import summaryController from '../controllers/summaryController';

router.get('/', summaryController.getSummaryData);

module.exports = router;
