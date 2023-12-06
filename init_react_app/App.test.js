// App.test.js
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

// Mockear Axios

describe("App component", () => {
  test("renders loading state", () => {
    // Configurar el estado de Axios para simular una carga en curso
    axios.mockResolvedValueOnce();

    // Renderizar el componente
    render(<App />);

    // Verificar que el texto de carga esté presente
    expect(screen.getByText(/Hola! Mundo/i)).toBeInTheDocument();
  });
});
