app.put('/products/:id', async (req, res) => {
  const id = req.params.id; // get id from frontend params

  const updatedProduct = req.body; // get body from frontend

  const result = await productCollection.updateOne(
    { _id: new ObjectId(id) },
    {
      $set: updatedProduct,
    },
  );

  res.send(result);
});
