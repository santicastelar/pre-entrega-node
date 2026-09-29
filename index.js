const [, , metodo, recurso, ...datos] = process.argv;

const API_URL = "https://fakestoreapi.com";

async function main() {
  try {
    // GET - Obtener todos los productos
    if (metodo === "GET" && recurso === "products") {
      const respuesta = await fetch(`${API_URL}/products`);

      if (!respuesta.ok) {
        throw new Error(`Error de API: ${respuesta.status}`);
      }

      const productos = await respuesta.json();

      console.log(productos);
      return;
    }

    // GET - Obtener un producto por ID
    if (metodo === "GET" && recurso?.startsWith("products/")) {
      const id = recurso.split("/")[1];

      const respuesta = await fetch(`${API_URL}/products/${id}`);

      if (!respuesta.ok) {
        throw new Error(`Error de API: ${respuesta.status}`);
      }

      const producto = await respuesta.json();

      console.log(producto);
      return;
    }

    // POST - Crear un producto
    if (metodo === "POST" && recurso === "products") {
      const [title, price, category] = datos;

      const nuevoProducto = {
        title,
        price: Number(price),
        category
      };

      const respuesta = await fetch(`${API_URL}/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(nuevoProducto)
      });

      if (!respuesta.ok) {
        throw new Error(`Error de API: ${respuesta.status}`);
      }

      const resultado = await respuesta.json();

      console.log(resultado);
      return;
    }

    // DELETE - Eliminar un producto por ID
    if (metodo === "DELETE" && recurso?.startsWith("products/")) {
      const id = recurso.split("/")[1];

      const respuesta = await fetch(`${API_URL}/products/${id}`, {
        method: "DELETE"
      });

      if (!respuesta.ok) {
        throw new Error(`Error de API: ${respuesta.status}`);
      }

      const resultado = await respuesta.json();

      console.log(resultado);
      return;
    }

    console.log("Comando no válido");
  } catch (error) {
    console.error("Ocurrió un error:", error.message);
  }
}

main();