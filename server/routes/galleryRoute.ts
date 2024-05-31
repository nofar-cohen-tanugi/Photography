import express from 'express';
const router = express.Router();
import galleryController from '../controllers/galleryController';

router.get('/', galleryController.getGallriesData);
router.get('/:id', galleryController.getGalleryByNameData);

module.exports = router;
