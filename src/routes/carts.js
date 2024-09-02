import { Router } from "express";

const router = Router();

const carts = [];

router.get('/', (req, res) => {
    res.send(carts);
})

router.post('/', (req,res) => {
    const {products} = req.body;
    const newCart = { id: carts.length + 1, products: []}

    carts.push(newCart);
    res.send(newCart);
})

router.get('/:cid', (req, res) => {
    const cid = req.params.cid;
    const cart = carts.find(cart => cart.id === cid);
    if (!cart) {
        return res.status(404).send({ message: 'Cart not found' });
        }
        res.send(cart);
})

router.post('/:cid/product/:pid', (req,res) => {
    const cid = req.params.cid;
    const pid = req.params.pid;
    
})

export default router;