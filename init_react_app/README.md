# Iniciar un Proyecto React desde Cero

Esta guía proporciona pasos detallados para iniciar un proyecto React sin utilizar Create React App.

## 1. Crear un nuevo proyecto

```bash
mkdir mi_proyecto_react
cd mi_proyecto_react
```

## 2. Inicializar un Repositorio Git

`git init`

## 3. Crear un archivo ".gitignore"

Crea un archivo llamado .gitignore en el directorio raíz del proyecto y agrega las carpetas y archivos que deseas ignorar. Por ejemplo:

```# Dependency directories
/node_modules

# Compiled files
/build
/dist

# Log files
/logs

# Environment files
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Editor directories and files
.idea
.vscode
*.suo
*.ntvs*

# OS generated files
.DS_Store
Thumbs.db
```

## 4. Inicializar el Proyecto de Node.js

`npm init -y`

## 5. Instalar React y ReactDOM

`npm install react react-dom`

## 6. Crear la Estructura de Carpetas

```src
  /components
  index.js
/public
  index.html
.gitignore
package.json
```

Dentro de public, crear un archivo index.html:

```<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Your React App</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="bundle.js"></script>
  </body>
</html>
```

Dentro de src, crear un archivo index.js:

```import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

## 7. Configurar Babel

Instalar Babel y preset de React:

`npm install @babel/core @babel/preset-env @babel/preset-react babel-loader --save-dev`

Crear un archivo .babelrc en el directorio raíz:

```{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

## 8. Configurar Webpack

Instalar Webpack y el loader de Babel:

`npm install webpack webpack-cli babel-loader --save-dev`

Crear un archivo webpack.config.js en el directorio raíz:

```const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  devServer: {
    static: path.resolve(__dirname, "public"), // Directorio donde estarán tus archivos compilados
    open: true, // Abre el navegador automáticamente al iniciar el servidor
    port: 3000, // Puerto del servidor
  },
};
```

## 9. Crear un Componente React

```// /src/components/App.js

import React from 'react';

const App = () => {
  return (
    <div>
      <h1>Hola, Mundo!</h1>
    </div>
  );
};

export default App;
```

## 10. Configurar Scripts en package.json

Editar el archivo package.json para incluir scripts para iniciar y construir la aplicación:

```"scripts": {
  "start": "webpack serve --mode development --open",
  "build": "webpack --mode production"
}
```

## 11. Ejecutar la Aplicación

`npm start`

Aparecerá este mensaje:

```
> init_react_app@1.0.0 start /Users/fran/Documents/PTR/init_react_app
> webpack serve --mode development --open

[webpack-cli] For using 'serve' command you need to install: 'webpack-dev-server' package.
[webpack-cli] Would you like to install 'webpack-dev-server' package? (That will run 'npm install -D webpack-dev-server') (Y/n)
```

Le diremos que Sí, este paquete es necesario para proporcionar un servidor de desarrollo y actualizar automáticamente tu aplicación en el navegador cuando realizas cambios en el código.


Visita http://localhost:8080 en tu navegador.
