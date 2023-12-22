// Pasa la variable products al controlador
export const getData = (req, res) => {
  const queryString = req.query.q || "";
  const products = req.products.products;
  const itemsFiltered = products.filter((item) =>
    item.title.match(queryString)
  );
  res.send(itemsFiltered);
};

export const getItem = async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const productsId = req.params.id;
  const products = req.products.products;
  const product = await products.filter(
    (item) => Number(item.id) === Number(productsId)
  );
  if (product) {
    res.send(product);
  } else {
    res.status(404).send("Producto no encontrado");
  }
};
