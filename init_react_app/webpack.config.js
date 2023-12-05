const path = require("path");

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
