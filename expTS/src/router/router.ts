import { Router, Request, Response } from 'express'
import mainController from '../controllers/main';
import main from '../controllers/main';

const router = Router();

// Main controller
router.get('/', mainController.index);
router.get('bemvindo/:nome', mainController.bemvindo);
router.get('/page', mainController.page);
router.get('/lorem', mainController.lorem);
router.get('/hb1', mainController.hb1);
router.get('/hb2', mainController.hb2);
router.get('/hb3', mainController.hb3);
router.get('/hb4', mainController.hb4);
router.get('/hb5', mainController.hb5);

export default router;      // router é um middleware