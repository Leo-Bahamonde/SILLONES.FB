/* const serverUrl ='http://localhost:3000/';
const itemsPath = 'mock/items.json';
const imagesPath= 'img/';


window.onload = getData();

const items = document.querySelector('.item');
console.log(':item',items);

function getData() {
    fetch(`${serverUrl}${itemsPath}`)
    .then((res) => res.json())
    .then((data) =>printData(data)); 
}

function printData(data) {
    const itemContainer = document.createElement('div')
    itemContainer.className = 'row'

    data.forEach((item) => {
        itemContainer.innerHTML += createDomElement(item);
        items.append(itemContainer);
    });
}

function createDomElement(item){
    const itemHtml = `<div class="col-sm-12 col-md-6 col-lg-4 col-xl-4">
    <div class="item shadow mb-4">
      <div class="card-body">
      <img class="item-image" src=${serverUrl}${imagesPath}${item.image} width="250px" alt="Matera">
        <h5 class="item-title">${item.tittle}</h5>
        <h4 class="item-price">${item.price}</h4>
        <div class="item-details">
          <a class="btn btn-primary" href="/DP_MATERA_1.html">Ver mas</a>
          <button class="item-button btn btn-primary addToCart">Añadir al  carrito</button>
      </div>
      </div>
    </div>
  </div>`
  return itemHtml;
} */