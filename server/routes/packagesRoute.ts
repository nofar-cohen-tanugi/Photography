import express from 'express';
const router = express.Router();
import packagesController from '../controllers/packagesController';

router.get('/', packagesController.getPackagesData);

module.exports = router;
