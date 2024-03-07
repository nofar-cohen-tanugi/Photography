import express from 'express';
const router = express.Router();
import galleryController from '../controllers/galleryController';

router.get('/', galleryController.getGalleryData);

module.exports = router;
