let menuLista =
[
    {
        id: 01,
        precio: 52.00,
        titulo: 'Chicken Veggi Salad',
        descripcion: 'With cheese saude',
        imagen: './img/sectioncomida/ensaladapollo.jpg'
    }
    ,
    {
        id: 02,
        precio: 23.00,
        titulo: 'Mutton Curry',
        descripcion: 'with basmati rice',
        imagen: './img/sectioncomida/curry.jpg'
    }
    ,
    {
        id: 03,
        precio: 21.00,
        titulo: 'French Fry',
        descripcion: 'with beef bacon',
        imagen: './img/sectioncomida/baconfrenchfries.jpg'
    }
    ,
    {
        id: 04,
        precio: 52.00,
        titulo: 'Chicken Veggi Salad',
        descripcion: 'With cheese saude',
        imagen: './img/sectioncomida/ensaladapollo.jpg'
    }
    
]

let carroCompra = []
let total = 0;

const plato = document.querySelector ("#sectioncarrito");
const boton = document.querySelector ("#enviopedido");
const precio = document.querySelector ("#precios");

function productosmenu()
{
    console.log(menuLista);
    menuLista.forEach((element) => 
    {
        let article = document.createElement('article');
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
        botonRestar.addEventListener('click', restarItem);
        botonRestar.textContent = '-';
        botonRestar.setAttribute('marcador', element.id);

        let inputCantidad = document.createElement('input');
        inputCantidad.classList.add('cantidad');
        inputCantidad.value = 0;
        inputCantidad.setAttribute('marcador', element.id);

        let botonSumar = document.createElement('button');
        botonSumar.classList.add('botones');
        botonSumar.addEventListener('click', sumarItem);
        botonSumar.textContent = '+';
        botonSumar.setAttribute('marcador', element.id);

        let sectionContenedor = document.getElementById('seccionComida');
        
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
    });

    function sumarItem() 
    {
        inputCantidad.value++;
    }
    function restarItem()
    {
        if(inputCantidad.value > 0 )
        {
            inputCantidad.value--;
        }
    }
}