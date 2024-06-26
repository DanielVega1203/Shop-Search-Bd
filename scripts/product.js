let list = document.getElementById("list");
let filter = document.querySelector(".filter");
let count = document.getElementById("count");
let listProducts = [
  {
    id: 1,
    nombre: "Air Jordan 1 High x DIOR",
    precio: 4900,
    cantidad: 4,
    image: "img/products/product1.png",
    descripcion: {
      color: ["blanco", "gris"],
      tallas: [39, 40, 41, 42, 43],
      tipo: "Jordan",
    },
  },
  {
    id: 2,
    nombre: "Air Jordan 1 Mid WMNS",
    precio: 3200,
    cantidad: 5,
    image: "img/products/product2.png",
    descripcion: {
      color: ["verde", "blanco", "rosado"],
      tallas: [39, 40, 41, 42, 43],
      tipo: "Jordan",
    },
  },
  {
    id: 3,
    nombre: "Air Jordan 1 High x TRAVIS SCOTT",
    precio: 1800,
    cantidad: 6,
    image: "img/products/product3.png",
    descripcion: {
      color: ["marron", "blanco", "negro"],
      tallas: [39, 40, 41, 42, 43],
      tipo: "Jordan",
    },
  },
  {
    id: 4,
    nombre: "Air Jordan 1 High OG ORANGE",
    precio: 2600,
    cantidad: 3,
    image: "img/products/product4.png",
    descripcion: {
      color: ["naranja", "blanco", "negro"],
      tallas: [39, 40, 41, 42, 43],
      tipo: "Jordan",
    },
  },
  {
    id: 5,
    nombre: "Air Jordan 1 High OG OBSIDIAN",
    precio: 1500,
    cantidad: 2,
    image: "img/products/product5.png",
    descripcion: {
      color: ["azul", "blanco", "negro"],
      tallas: [39, 40, 41, 42, 43],
      tipo: "Jordan",
    },
  },
  {
    id: 6,
    nombre: "Air Jordan 1 High SB LA TO CHICAGO",
    precio: 2148,
    cantidad: 5,
    image: "img/products/product6.png",
    descripcion: {
      color: ["morado", "amarillo", "blanco"],
      tallas: [39, 40, 41, 42, 43],
      tipo: "Jordan",
    },
  },
  {
    id: 7,
    nombre: "Air Jordan 1 High OG PS SEAFOAM",
    precio: 2854,
    cantidad: 7,
    image: "img/products/product7.png",
    descripcion: {
      color: ["blanco", "limon"],
      tallas: [39, 40, 41, 42, 43],
      tipo: "Jordan",
    },
  },
  {
    id: 8,
    nombre: "Air Jordan 1 High OG SHATTERED BACKBOARD",
    precio: 1350,
    cantidad: 4,
    image: "img/products/product8.png",
    descripcion: {
      color: ["naranja", "negro"],
      tallas: [39, 40, 41, 42, 43],
      tipo: "Jordan",
    },
  },
  {
    id: 9,
    nombre: "Air Jordan 1 High OG CRAFTED",
    precio: 1875,
    cantidad: 6,
    image: "img/products/product9.png",
    descripcion: {
      color: ["morado", "verde", "gris", "marron", "naranja"],
      tallas: [39, 40, 41, 42, 43],
      tipo: "Jordan",
    },
  },
  {
    id: 10,
    nombre: "Air Jordan 1 High OG BORDEAUX",
    precio: 2154,
    cantidad: 3,
    image: "img/products/product10.png",
    descripcion: {
      color: ["morado", "blanco", "gris"],
      tallas: [39, 40, 41, 42, 43],
      tipo: "Jordan",
    },
  },
  {
    id: 11,
    nombre: "Air Jordan 1 High OG DARK MOCHA",
    precio: 1473,
    cantidad: 6,
    image: "img/products/product11.png",
    descripcion: {
      color: ["morado", "blanco", "gris"],
      tallas: [39, 40, 41, 42, 43],
      tipo: "Jordan",
    },
  },
  {
    id: 12,
    nombre: "Air Jordan 1 High OG DARK MOCHA",
    precio: 2935,
    cantidad: 7,
    image: "img/products/product12.png",
    descripcion: {
      color: ["marron", "blanco", "negro"],
      tallas: [39, 40, 41, 42, 43],
      tipo: "Jordan",
    },
  },
  {
    id: 13,
    nombre: "Nike Phantom Luna 2 Elite",
    precio: 1485,
    cantidad: 5,
    image: "img/products/product13.png",
    descripcion: {
      color: ["beige", "negro"],
      tallas: [39, 40, 41, 42, 43],
      tipo: "Futbol",
    },
  },
  {
    id: 14,
    nombre: "Nike Mercurial Vapor 15 Elite",
    precio: 2480,
    cantidad: 2,
    image: "img/products/product14.png",
    descripcion: {
      color: ["beige", "negro"],
      tallas: [39, 40, 41, 42, 43],
      tipo: "Futbol",
    },
  },
  {
    id: 15,
    nombre: "Nike Phantom Luna 2 Elite LVB",
    precio: 1478,
    cantidad: 4,
    image: "img/products/product15.png",
    descripcion: {
      color: ["verde", "naranja"],
      tallas: [39, 40, 41, 42, 43],
      tipo: "Futbol",
    },
  },
  {
    id: 16,
    nombre: "Nike Mercurial Superfly 9 Club",
    precio: 2870,
    cantidad: 7,
    image: "img/products/product16.png",
    descripcion: {
      color: ["blanco", "rojo"],
      tallas: [39, 40, 41, 42, 43],
      tipo: "Futbol",
    },
  },
  {
    id: 17,
    nombre: "Nike Tiempo Legend 10 Academy",
    precio: 1780,
    cantidad: 5,
    image: "img/products/product17.png",
    descripcion: {
      color: ["limon", "negro", "blanco"],
      tallas: [39, 40, 41, 42, 43],
      tipo: "Futbol",
    },
  },
  {
    id: 17,
    nombre: "Nike Tiempo Legend 10 Academy",
    precio: 1780,
    cantidad: 5,
    image: "img/products/product17.png",
    descripcion: {
      color: ["limon", "negro", "blanco"],
      tallas: [39, 40, 41, 42, 43],
      tipo: "Futbol",
    },
  },
];

let productFilter = listProducts;
showProduct(productFilter);

function showProduct(productFilter) {
  count.innerText = productFilter.length;
  list.innerHTML = "";
  productFilter.forEach((item) => {
    let newItem = document.createElement("div");
    newItem.classList.add("item");

    // Crea la imagen y la agrega
    let newImage = new Image();
    newImage.classList.add("imagenShoes");
    newImage.src = item.image;
    newItem.appendChild(newImage);

    // Crea el título y lo agrega
    let newTitle = document.createElement("div");
    newTitle.classList.add("title");
    newTitle.innerText = item.nombre;
    newItem.appendChild(newTitle);

    // Crea el contenedor para precio y botón
    let newPriceButtonContainer = document.createElement("div");
    newPriceButtonContainer.classList.add("price-button-container");

    // Crea el precio y lo agrega al contenedor
    let newPrice = document.createElement("div");
    newPrice.classList.add("precio");
    newPrice.innerText = "s/." + item.precio.toLocaleString();
    newPriceButtonContainer.appendChild(newPrice);

    // Crea el botón ver más y lo agrega al contenedor
    let newDetalles = document.createElement("button");
    newDetalles.classList.add("detalles");

    // Crear el icono utilizando Font Awesome
    let icon = document.createElement("i");
    icon.classList.add("fas", "fa-chevron-right");

    // Texto para el botón
    let buttonText = document.createTextNode("Detalles");

    // Agregar el icono y el texto al botón
    newDetalles.appendChild(buttonText);
    newDetalles.appendChild(icon);

    // Agregar evento al botón
    newDetalles.addEventListener("click", () => showDetails(item));

    // Agregar el botón al contenedor
    newPriceButtonContainer.appendChild(newDetalles);

    // Agregar el contenedor de precio y botón al div principal
    newItem.appendChild(newPriceButtonContainer);

    list.appendChild(newItem);
  });
}


function showDetails(item) {
  // Crear y mostrar el fondo difuminado
  let overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.body.appendChild(overlay);

  // Crear el cuadro de detalles
  let detailBox = document.createElement("div");
  detailBox.classList.add("detail-box");

  // Agregar contenido al cuadro de detalles
  detailBox.innerHTML = `
  <button class="close-button" onclick="closeDetails()">×</button>
  <img src="${item.image}" alt="${item.nombre}">
  <div class="details">
      <h2>${item.nombre}</h2>
      <p><strong>Precio:</strong> s/.${item.precio.toLocaleString()}</p>
      <p><strong>Cantidad disponible:</strong> ${item.cantidad}</p>
      <p><strong>Colores disponibles:</strong> ${item.descripcion.color.join(', ')}</p>
      <p><strong>Tallas disponibles:</strong> ${item.descripcion.tallas.join(', ')}</p>
      <p><strong>Tipo:</strong> ${item.descripcion.tipo}</p>
      <button class="buy-button">Comprar</button>
  </div>
`;

  // Agregar el cuadro de detalles al documento
  document.body.appendChild(detailBox);

  // Forzar reflujo para activar la transición
  window.getComputedStyle(detailBox).opacity;
  window.getComputedStyle(overlay).opacity;

  // Agregar clases para mostrar el cuadro de detalles y el overlay
  detailBox.classList.add("show");
  overlay.classList.add("show");

  // Agregar evento de clic al botón "Comprar"
  let buyButton = detailBox.querySelector(".buy-button");
  buyButton.addEventListener("click", () => {
    Swal.fire({
      title: "Compra exitosa!",
      icon: "success"
    }).then(() => {
      closeDetails();
    });
  });
}

function closeDetails() {
  let detailBox = document.querySelector(".detail-box");
  let overlay = document.querySelector(".overlay");
  if (detailBox) {
    detailBox.classList.remove("show");
    detailBox.addEventListener(
      "transitionend",
      () => {
        detailBox.remove();
      },
      { once: true }
    );
  }
  if (overlay) {
    overlay.classList.remove("show");
    overlay.addEventListener(
      "transitionend",
      () => {
        overlay.remove();
      },
      { once: true }
    );
  }
}



filter.addEventListener("submit", function (event) {
  event.preventDefault();
  let valueFilter = event.target.elements;
  let colorFiltro = valueFilter.color.value;
  let tipoFiltro = valueFilter.category.value;
  let nombreFiltro = valueFilter.name.value.trim();
  let montoMinimo = parseFloat(valueFilter.minPrice.value);
  let montoMaximo = parseFloat(valueFilter.maxPrice.value);

  productFilter = listProducts.filter((item) => {
    // Verificar si hay un filtro de tipo
    if (valueFilter.category.value !== "") {
      if (item.descripcion.tipo !== tipoFiltro) {
        return false;
      }
    }

    // Verificar si hay un filtro de color
    if (valueFilter.color.value !== "") {
      if (!item.descripcion.color.includes(colorFiltro)) {
        return false;
      }
    }

    // Verificar por nombre
    if (nombreFiltro !== "") {
      if (!item.nombre.toLowerCase().includes(nombreFiltro.toLowerCase())) {
        return false;
      }
    }

    // Verificar por precio Minimo
    if (!isNaN(montoMinimo)) {
      if (item.precio < montoMinimo) {
        return false;
      }
    }

    // Verificar por precio Maximo
    if (!isNaN(montoMaximo)) {
      if (item.precio > montoMaximo) {
        return false;
      }
    }

    return true;
  });

  showProduct(productFilter);
});