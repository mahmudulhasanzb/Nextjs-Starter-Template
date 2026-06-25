app.delete('/products/:id', async (req, res) => {
  const id = req.params.id; // get product id from frontend params

  const result = await productCollection.deleteOne({
    _id: new ObjectId(id),
  });

  res.send(result);
});
