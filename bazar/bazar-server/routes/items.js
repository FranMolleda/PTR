import express from 'express';
import {
    getData
} from '../controllers/items.js';

const router = express.Router();

const path = '/item';

// Pasa la variable products al controlador a través de req (rep.products)
router.get(`${path}`, (req, res) => getData(req, res));

export default router;