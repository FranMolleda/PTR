// Pasa la variable products al controlador
export const getData = (req, res, string = "Hya") => {
  const products = req.products.products;
  const itemsFiltered = products.filter((item) => item.title.match(string));
  res.send(itemsFiltered);
};

export const getItem = (req, res, id = 2) => {
  const products = req.products.products;
  const product = products.filter((item) => item.id === id);
  res.send(product);
};
