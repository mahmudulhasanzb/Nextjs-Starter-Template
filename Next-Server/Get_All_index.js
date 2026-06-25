app.get('/products', async (req, res) => {
    const products = await productCollection.find({}).toArray();

    res.send(products);
  });

