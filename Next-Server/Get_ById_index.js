app.get('/products/:id', async (req, res) => {
  const id = req.params.id; // get id from frontend

  const product = await productCollection.findOne({
    _id: new ObjectId(id),
  });

  res.send(product);
});
