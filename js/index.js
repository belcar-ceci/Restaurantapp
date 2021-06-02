let mainView = document.getElementById('index');
let cartView = document.getElementById('carrito');

function ocultar()
{
    mainView.style.display = 'none';
    cartView.style.display = 'block';
}
function mostrar()
{
    mainView.style.display = 'block';
    cartView.style.display = 'none';

}