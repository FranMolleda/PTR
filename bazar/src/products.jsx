import axios from "axios";

export const getProduts = async () => {
  try {
    const response = await axios.get("http://localhost:3000/products");
    const listProducts = response.data.products;
    return listProducts;
  } catch (error) {
    console.log(error);
  }
};
