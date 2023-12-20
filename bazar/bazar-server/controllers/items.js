// Pasa la variable products al controlador
export const getData = (req, res, string = "Hya") => {
  const productos = req.products.products;
  const itemsFiltered = productos.filter((item) => item.title.match(string));
  res.send(itemsFiltered);
};
