// ##########################################
// IMPORTACIONES 
// ##########################################

import { cleanContainer } from "./generalFunctions.js";
import { productsToShow, downBtn, subTotalGeneral, total } from "./selectors.js";
import { subtotal } from "./shoppingCart.js";

const productsOnLocalSto = JSON.parse( localStorage.getItem('productsOnCart') );

// ##########################################
// EVENT LISTENERS
// ##########################################

document.addEventListener('DOMContentLoaded', insertProducts );

downBtn.addEventListener('click', showHiddenProducts);

// ##########################################
// FUNCIONES
// ##########################################

function insertProducts() {

  cleanContainer( productsToShow );

  if ( productsOnLocalSto.length ) {
    productsOnLocalSto.forEach( ({img, imgWebp, imgAvif, amount, price, size, title}) => {

      const productCartDiv = document.createElement('LI');
      productCartDiv.classList.add('productCart');
  
      productCartDiv.innerHTML = `
        <picture class="productCart__imageBox">
          <source srcset="${imgAvif}" type="image/avif">
          <source srcset="${imgWebp}" type="image/webp">
          <img class="productCart__image" loading="lazy" src="${img}" alt="Producto en carro"/>
        </picture>
  
        <div class="productCart__info">
          <p class="productCart__title">${title}</p>
          <p class="productCart__price">Precio: <span>$${price}</span></p>
          <p class="productCart__size">Talla: <span>${size}</span></p>
          <p class="productCart__amount">Cantidad: <span>${amount}</span></p>
          <img src="/img/Academlo.svg" alt="Academlo logo" class="productCart__logo">
          <p class="productCart__subtotal text-right">Subtotal: $${(price * amount).toFixed(2)}</p>
        </div>
      `;
  
      productsToShow.appendChild( productCartDiv );
  
    });

    subTotalGeneral.textContent = `$${subtotal.toFixed(2)}`;
    total.textContent = `$${(subtotal + 99.99).toFixed(2)}` 

  } else {
    const productCartDiv = document.createElement('LI');
    productCartDiv.classList.add('productCart','productCart--empty');
    productCartDiv.textContent = 'No hay artículos en tu carrito de compras';
    productsToShow.appendChild( productCartDiv );
  }

}

function showHiddenProducts() {
  productsToShow.classList.toggle('show-products')
}