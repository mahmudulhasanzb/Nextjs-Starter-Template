app.post('/products', async (req, res) => {
  const product = req.body; // get product data from frontend

  const result = await productCollection.insertOne(product);

  res.send(result);
});
