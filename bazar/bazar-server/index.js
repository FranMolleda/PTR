/* import express from "express";
import process from "process";
import fs from "fs";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Bazary!");
});

app.use(express.static("public"));

app.get("/products", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const filePath = process.cwd() + "/" + "products.json";
  const fileData = fs.readFileSync(filePath);
  const products = JSON.parse(fileData);
  res.send(products);
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
}); */

import express from 'express';
import fs from 'fs';
import process from "process";

const app = express();

app.get('/', (req, res) => res.send('Hello from Bazary!'));

app.get('/products', async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  try {
    const filePath = process.cwd() + '/' + 'products.json';
    const fileData = await fs.promises.readFile(filePath, 'utf8');
    const products = JSON.parse(fileData);
    res.send(products);
  } catch (error) {
    console.error(error);
  }
});

app.listen(3000, () => console.log('Server is running on port 3000'));

/* otra manera sería separar la lógica: 

 app.get("/products", handleProductsRequest);
 
 function handleProductsRequest(req, res) {
  res.header("Access-Control-Allow-Origin", "*");

  try {
    const filePath = process.cwd() + '/' + 'products.json`;
    const fileData = fs.readFileSync(filePath);
    const products = JSON.parse(fileData);
    res.send(products);
  } catch (error) {
    console.error("Error reading products file:", error);
    res.status(500).send("Internal Server Error");
  }
}
*/