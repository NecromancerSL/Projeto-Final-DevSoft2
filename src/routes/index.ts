import { Router } from 'express';
import * as HomeController from '../controllers/homeController';
import * as InfoController from '../controllers/infoController';
import * as CardController from '../controllers/cardController';
import { Cards } from '../models/Cards';

const router = Router();


router.get('/', HomeController.home);
router.get('/cadastro', InfoController.cadastro);
// router.get('/editar', InfoController.editar);
router.get('/editar/:id', CardController.editar);
router.get('/card/:id/excluir', CardController.excluir);
router.post('/novocard', CardController.novocard);
router.post('/salvar', CardController.salvar);


export default router;