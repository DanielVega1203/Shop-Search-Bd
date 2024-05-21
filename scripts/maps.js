// Array de tiendas
const stores = [
  {
    id: 1,
    nombre: 'Nike Outlet Minka (OMA1)',
    ciudad: 'Callao',
    ubicacion: 'Av. Argentina Nro 3093 Int. L990 - Callao',
    Horario: '10:00 am a 11:00 pm',
    disponibilidad: 'Abierto'
},
{
    id: 2,
    nombre: 'Nike Outlet Faucet (OFT1)',
    ciudad: 'Callao',
    ubicacion: 'Av. Elmer Faucett N°3443 2do Nivel / C.C. InOutlet - Callao',
    Horario: '10:00 am a 12:00 pm',
    disponibilidad: 'Abierto'
},
{
    id: 3,
    nombre: 'Nike Mall del Sur (NMS1)',
    ciudad: 'Lima',
    ubicacion: 'Av. Los Lirios Nº 301 int. 2134 C.C Mall del Sur local LSC S-2134 Lima',
    Horario: '10:00 am a 11:00 pm',
    disponibilidad: 'Abierto'
},
{
    id: 4,
    nombre: 'Nike Outlet Centro Cívico (OCC1)',
    ciudad: 'Lima',
    ubicacion: 'Av. Garcilazo de la Vega Nº 1337 Int. LC 2012 - 2013 C.C. Real Plaza 2do Nivel',
    Horario: '10:00 am a 11:00 pm',
    disponibilidad: 'Cerrado'
},
{
    id: 5,
    nombre: 'Nike Outlet CHimu (OSL1)',
    ciudad: 'Lima',
    ubicacion: 'Av. Gran Chimú N°689 - Zárate - San Juan de Lurigancho',
    Horario: '10:00 am a 11:00 pm',
    disponibilidad: 'Cerrado'
}
,
{
    id: 6,
    nombre: 'Nike Outlet CHimu (OSL1)',
    ciudad: 'Lima',
    ubicacion: 'Av. Gran Chimú N°689 - Zárate - San Juan de Lurigancho',
    Horario: '10:00 am a 11:00 pm',
    disponibilidad: 'Cerrado'
}
];

// Función para mostrar los resultados
function showResults(city) {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = ''; // Limpiar resultados anteriores

  let filteredStores;
  if (city === 'all') {
    filteredStores = stores;
  } else {
    filteredStores = stores.filter(store => store.ciudad === city);
  }

  if (filteredStores.length === 0) {
    resultsDiv.innerHTML = '<p>No se encontraron tiendas en esta ciudad.</p>';
  } else {
    filteredStores.forEach(store => {
      const storeDiv = document.createElement('div');
      storeDiv.classList.add('resultBox');
      storeDiv.innerHTML = `
        <h3>${store.nombre}</h3>
        <p><strong>Ubicación:</strong> ${store.ubicacion}</p>
        <p><strong>Horario:</strong> ${store.Horario}</p>
        </br>
        <p><strong style="color: green;">Disponibilidad:</strong> ${store.disponibilidad}</p>
      `;
      resultsDiv.appendChild(storeDiv);
    });
  }
}

// Escuchar el envío del formulario
const form = document.getElementById('storeForm');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe
  const city = document.getElementById('city').value;
  showResults(city);
});

document.addEventListener('DOMContentLoaded', function() {
  showResults('all')
})
