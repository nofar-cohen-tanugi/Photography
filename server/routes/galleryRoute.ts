import express from 'express';
const router = express.Router();
import galleryController from '../controllers/galleryController';

router.get('/', galleryController.getGallriesData);
router.get('/:name', galleryController.getGalleryByNameData);

module.exports = router;
