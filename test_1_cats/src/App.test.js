// App.test.js
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import App from "./App";

// Mockear Axios
jest.mock("axios");

describe("App component", () => {
  test("renders loading state", () => {
    // Configurar el estado de Axios para simular una carga en curso
    axios.mockResolvedValueOnce();

    // Renderizar el componente
    render(<App />);

    // Verificar que el texto de carga esté presente
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  test("fetches and displays cat data and giphy image", async () => {
    // Configurar el estado de Axios para devolver datos simulados
    axios.mockResolvedValueOnce({ data: { fact: "Mocked cat data" } });

    // Configurar el estado de Axios para devolver datos simulados de la imagen
    axios.mockResolvedValueOnce({
      data: {
        data: [
          {
            images: {
              downsized: {
                url: "https://example.com/cat.gif",
              },
            },
          },
        ],
      },
    });

    // Renderizar el componente
    render(<App />);

    // Esperar a que los datos se carguen
    await waitFor(() => {
      // Verificar que el texto del gato esté presente
      expectCatDataText();

      // Verificar que la imagen esté presente y tenga la URL correcta
      expectCatImage();
    });
  });

  // Función para verificar el texto del gato
  const expectCatDataText = () => {
    expect(screen.getByText(/Mocked cat data/i)).toBeInTheDocument();
  };

  // Función para verificar la imagen del gato
  const expectCatImage = () => {
    const catImage = screen.getByAltText("giphyImage");
    expect(catImage).toBeInTheDocument();
    expect(catImage.src).toBe("https://example.com/cat.gif");
  };
});
