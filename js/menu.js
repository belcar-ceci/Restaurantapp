let menuLista =
[
    {
        id: 01,
        precio: 52.00,
        titulo: 'Chicken Veggi Salad',
        descripcion: 'With cheese saude',
        imagen: './img/sectioncomida/ensaladapollo.jpg',
        categoria: 'dinner',
        cantidad: 0
    }
    ,
    {
        id: 02,
        precio: 23.00,
        titulo: 'Mutton Curry',
        descripcion: 'with basmati rice',
        imagen: './img/sectioncomida/curry.jpg',
        categoria: 'dinner',
        cantidad: 0
    }
    ,
    {
        id: 03,
        precio: 21.00,
        titulo: 'French Fry',
        descripcion: 'with beef bacon',
        imagen: './img/sectioncomida/baconfrenchfries.jpg',
        categoria: 'dinner',
        cantidad: 0
    }
    ,
    {
        id: 04,
        precio: 52.00,
        titulo: 'Chicken Veggi Salad',
        descripcion: 'With cheese saude',
        imagen: './img/sectioncomida/ensaladapollo.jpg',
        categoria: 'breakfast',
        cantidad: 0
    }
    
]

let carroCompra = [];
let total = 0;

const plato = document.querySelector ("#sectioncarrito");
const boton = document.querySelector ("#enviopedido");
const precio = document.querySelector ("#precios");

let sectionContenedor = document.getElementById('seccionComida');

function filterByCategory(categoryName){
    let filteredDishes = menuLista.filter(item => item.categoria === categoryName);
    return filteredDishes;
}

function getFilteredItems(categoryName){
   let filteredDishes = filterByCategory(categoryName);
   loadArrayDishes(filteredDishes);
}

function loadArrayDishes(arrayList)
{
    sectionContenedor.innerHTML = "";
    arrayList.forEach((element) => 
    {
        printData(element)
    });
}

function printData(element)
{

    let article = document.createElement('article');
    article.setAttribute('data-marcador', element.id);
    article.classList.add('articulos');

    let divImagen = document.createElement('div');
    divImagen.classList.add('imagenmenu');

    let imgImagen = document.createElement('img');
    imgImagen.classList.add('ensalada');
    imgImagen.setAttribute('src', element.imagen)

    let divDestallesMenu = document.createElement('div');
    divDestallesMenu.classList.add('detallesmenu');

    let precioPlato = document.createElement('p');
    precioPlato.classList.add('precioplato');
    precioPlato.textContent = element.precio + '$';

    let nombrePlato = document.createElement('p');
    nombrePlato.classList.add('nombreplato');
    nombrePlato.textContent = element.titulo;

    let detalleplato = document.createElement('p');
    detalleplato.classList.add('detalleplato');
    detalleplato.textContent = element.descripcion;

    let contadores = document.createElement('div');
    contadores.classList.add('buttonContadores');

    let botonRestar = document.createElement('button');
    botonRestar.classList.add('botones');
    botonRestar.textContent = '-';
    botonRestar.setAttribute('data-marcador', element.id);
    botonRestar.addEventListener('click', restarItem);
    botonRestar.setAttribute('id', 'botonRestar')

    let inputCantidad = document.createElement('input');
    inputCantidad.classList.add('cantidad');
    inputCantidad.value = 0;
    inputCantidad.setAttribute('data-marcador', element.id);
    inputCantidad.setAttribute('id', 'inputContador')

    let botonSumar = document.createElement('button');
    botonSumar.classList.add('botones');
    botonSumar.textContent = '+';
    botonSumar.setAttribute('data-marcador', element.id);
    botonSumar.addEventListener('click', sumarItem);
    botonSumar.setAttribute('id', 'botonSumar')

    
    sectionContenedor.appendChild(article);
    article.appendChild(divImagen);
    divImagen.appendChild(imgImagen);
    article.appendChild(divDestallesMenu);
    divDestallesMenu.appendChild(precioPlato);
    divDestallesMenu.appendChild(nombrePlato);
    divDestallesMenu.appendChild(detalleplato);
    divDestallesMenu.appendChild(contadores);
    contadores.appendChild(botonRestar);
    contadores.appendChild(inputCantidad);
    contadores.appendChild(botonSumar);
}

function sumarItem()
{
    if(botonSumar.dataset.marcador === inputContador.dataset.marcador)
    {
        inputContador.value ++;
    }
}
function restarItem()
{
    if(botonRestar.dataset.marcador = inputContador.dataset.marcador)
    {
        inputContador.value --;
    }
}

loadArrayDishes(menuLista);