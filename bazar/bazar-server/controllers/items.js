// Pasa la variable products al controlador
export const getData = (req, res) => {
  const queryString = req.query.q || "";
  const products = req.products.products;
  const itemsFiltered = products.filter((item) =>
    item.title.match(queryString)
  );
  res.send(itemsFiltered);
};

export const getItem = (req, res, id = 2) => {
  res.header("Access-Control-Allow-Origin", "*");
  const products = req.products.products;
  const product = products.filter((item) => item.id === id);
  res.send(product);
};
