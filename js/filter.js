"use strict";

// ##############################################
// IMPORTS
// ##############################################

import products from './data.js';
import { alerts, cleanContainer } from './generalFunctions.js';
import { productContainer, selectEl, btnWhite } from './selectors.js';

// ##############################################
// EVENT LISTENERS
// ##############################################

document.addEventListener('DOMContentLoaded', () => {
  showProducts( products );
});

selectEl.addEventListener('change', e => {
  const targetProducts = e.target.value;
  filterProducts( targetProducts ); 
});

btnWhite.addEventListener('click', e => {
  e.preventDefault();
  alerts('No hay más productos', 'danger');
});

// ##############################################
// FUNCTIONS
// ##############################################

// Create the product on HTML
function showProducts( products ) {

  cleanContainer( productContainer );

  products.forEach( ({title, price, img, imgWebp, imgAvif, id, size }) => {
   
    const productDiv = document.createElement('DIV');
    productDiv.classList.add('product');
    
    productDiv.innerHTML = `
      <picture>
        <source class="imgAvif" srcset="${imgAvif}" type="image/avif">
        <source class="imgWebp" srcset="${imgWebp}" type="image/webp">
        <img loading="lazy" src="${img}" alt="product 1"/>
      </picture>
      <p class="product__title">${title}</p>
      <p class="product__size">Talla: <span>${size}</span></p>
      <div class="product__priceBox">
        <ion-icon name="bag-add-outline" class="icon icon--bag add-cart" data-id="${id}"></ion-icon>
        <p class="product__price">$<span>${price}</span></p>
      </div>
    `;

    productContainer.insertAdjacentElement( 'afterbegin', productDiv );

  });

}

// Filters the products depending on the criteria specified by the user
function filterProducts( targetProduct ) {
  
  if ( targetProduct !== 'todos' ) {
    const foundProducts = products.filter( ({category}) => category === targetProduct );
    showProducts( foundProducts );
  } else {
    showProducts(products);
  }

}
