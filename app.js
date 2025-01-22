// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// capturar valores
const input = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

// agregar con la tecla enter :D
input.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      agregarAmigo();
    }
  });

// Función para agregar amigos y actualizar la lista visual
function agregarAmigo() {

  // Capturar el valor del campo de entrada
  const nombre = input.value.trim();

  // Validar la entrada
  if (nombre === '' || /\d/.test(nombre)) {
    alert(nombre === '' ? 'Por favor, inserte un nombre.' : 'El nombre no debe contener números.');
    input.value = '';
    return;
  }
  // Actualizar el array de amigos
  amigos.push(nombre);

  // Limpiar el campo de entrada
  input.value = ''; 

  // Actualizar la visualización de la lista de amigos
  actualizarLista();
}

//Función para actualizar la lista
function actualizarLista() {
    //limpiar el contenido de la lista
    listaAmigos.innerHTML = '';

    // Recorrer el array amigos
    amigos.forEach(amigo => {
      // Crear un nuevo elemento <li>
      const lista = document.createElement('li');

      // Agregar el nombre del amigo al elemento <li>
      lista.textContent = amigo;

      //Añade el elemento <li> a la lista <ul>
      listaAmigos.appendChild(lista);
    });
  }

// Función para sortear un amigo secreto
function sortearAmigo() {
  // Validar que haya amigos disponibles
  if (amigos.length === 0) {
    alert('No hay amigos en la lista para sortear, por favor ingrese los nombres.');
    return;
  }

  // sortea un amigo random como seleccionado
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre sorteado
  const amigoSorteado = amigos[indiceAleatorio];

  //Ocultar la lista de amigos
  listaAmigos.classList.add('hidden');

  // Mostrar el resultado
  resultado.innerHTML = `el amigo secreto sorteado es: ${amigoSorteado}`;
}