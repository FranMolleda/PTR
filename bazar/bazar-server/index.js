import express from 'express';
import cors from 'cors';
import fs from 'fs';
import process from 'process';
import itemsRouter from './routes/items.js';

const app = express();


app.use(cors());


let products; // Variable para almacenar los productos

// Cargar productos al inicio del servidor
try {
  const filePath = process.cwd() + '/' + 'products.json';
  const fileData = fs.readFileSync(filePath, 'utf8');
  products = JSON.parse(fileData);
} catch (error) {
  console.error('Error loading products:', error);
  products = []; // o manejar el error de otra manera según tus necesidades
}

// Pasa la variable products al router usando middleware:

/* 
req: Representa el objeto de solicitud. En este contexto, es la solicitud HTTP que ha llegado al servidor.
res: Representa el objeto de respuesta. Es la respuesta HTTP que se enviará al cliente.
next: Es una función que se llama para pasar el control al siguiente middleware en la cadena. Si no llamas a next(), la ejecución no avanzará al siguiente middleware.
req.products = products;: En esta línea, estamos asignando el valor de la variable products al objeto de solicitud req. Esto significa que ahora, en cualquier lugar de la aplicación donde tengamos acceso al objeto de solicitud (req), podemos acceder a req.products y obtener el valor de products.

next();: Llamamos a next() para indicar que hemos terminado con este middleware y queremos pasar al siguiente middleware en la cadena.

En resumen, este middleware específico se encarga de asignar la variable products al objeto de solicitud (req). Esto se hace antes de que la solicitud alcance las rutas definidas en tu aplicación, lo que significa que req.products estará disponible en cualquier lugar posterior en el flujo de manejo de la solicitud.
 */
app.use((req, res, next) => {
  req.products = products;
  next();
});

app.use(itemsRouter);

app.get('/', (req, res) => res.send('Hello from Bazary!'));

app.get('/products', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.send(req.products);
});

app.listen(3000, () => console.log('Server is running on port 3000'));