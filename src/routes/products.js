import { Router } from "express";

const router = Router();

let products = [];

router.get('/', (req, res) => {
  res.send(products);
});

router.get('/:pid', (req, res) => {
  const pid = +req.params.pid;
  const product = products.find((product) => product.id === pid);

  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not found" });
  }
});

router.post('/', (req, res) => {
    const { title, description, code, price, status, stock, category } = req.body;
    const newProduct = { id: products.length + 1, title, description, code,price,  status, stock, category };

    products.push(newProduct);
    res.send(newProduct);
})

router.put('/:pid', (req,res) => {
  const productId = req.params.pid;
  const updateProduct = req.body;
  
  const index = products.findIndex( product => product.id == productId);

  if (index === -1) {
      return res.status(404).send({status: 'error', message: 'Product not found'})
  }

  products[index] = updateProduct;
  res.send({status: 'success', message: 'Edited product'})
})

router.delete('/:pid', (req, res) => {
  const productId = req.params.pid;
  const currentLength = products.length;

  products = products.filter(product => productId != product.id);

    if (currentLength === products.length) {
        return res.status(404).send({status: 'error', message: 'Product not found'})
    }

    res.send({status: 'succes', message: 'Removed product'});  
})
export default router;
