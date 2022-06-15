"use strict";

// ##############################################
// IMPORTS
// #############################################

import { 
  cart, 
  cartList,
  closeBtn, 
  cartBtn, 
  cleanBtn,
  productContainer,
  cartPrice
} from "./selectors.js";

import { alerts, cleanContainer } from "./generalFunctions.js";


let productsOnCart = [];
export let subtotal;

// ##############################################
// EVENT LISTENERS
// #############################################

document.addEventListener('DOMContentLoaded', () => {
  productsOnCart = JSON.parse(localStorage.getItem('productsOnCart')) || [];
  createProductsOnCart();
});

cartBtn.addEventListener('click', showCloseCart );
closeBtn.addEventListener('click', showCloseCart );

productContainer.addEventListener('click', identifyProduct );

cleanBtn.addEventListener('click', e => {
  e.preventDefault();
  cleanCart();
}); 

cartList.addEventListener('click', editProduct );

// ##############################################
// FUNCTIONS
// #############################################

function showCloseCart() {
  cart.classList.toggle('show-cart');
}

export function cleanCart() {
  productsOnCart = [];
  alerts('Carrito vacío', 'success');
  createProductsOnCart();
}

function identifyProduct( e ) {

  if ( e.target.classList.contains('add-cart') ) {
    const wantedProduct = e.target.parentElement.parentElement;
    infoProduct( wantedProduct );
  }

}

function infoProduct( product ) {

  const information = {
    title: product.querySelector('.product__title').textContent,
    price: Number(product.querySelector('.product__price span').textContent),
    size: product.querySelector('.product__size span').textContent,
    id: product.querySelector('.icon--bag').getAttribute('data-id'),
    img: product.querySelector('img').src,
    imgWebp: product.querySelector('.imgWebp').srcset,
    imgAvif: product.querySelector('.imgAvif').srcset,
    amount: 1,
  }

  const existence = productsOnCart.some( product => product.id === information.id );

  if ( existence ) {
    alerts('El producto ya está en el carrito', 'danger');
  } else {  
    productsOnCart = [...productsOnCart, information ];
    alerts('Articulo agregado al carrito', 'success');
  }

  createProductsOnCart();

}

function createProductsOnCart() {

  cleanContainer( cartList );

  if ( productsOnCart.length ) {

    productsOnCart.forEach( ({img, imgWebp, imgAvif, title, price, size, amount, id}) => {
      
      const cartProduct = document.createElement('LI');
      cartProduct.classList.add('cart__product');
  
      cartProduct.innerHTML = `
        <picture class="cart__imageBox">
          <source srcset="${imgAvif}" type="image/avif">
          <source srcset="${imgWebp}" type="image/webp">
          <img loading="lazy" src="${img}" class="cart__image" alt="Artículo en el carrito"/>
        </picture>
        <div class="cart__info">
          <p class="cart__title">${title}</p>
          <p class="cart__price">$${price}</p>
          <p class="cart__size">Talla: ${size}</p>
                  
          <div class="cart__buttons">
            <div class="cart__amountBox">
              <button class="minus">&minus;</button>
              <p class="cart__amount" id="cartAmount">${amount}</p>
              <button class="plus">&plus;</button>
            </div>
            <ion-icon name="trash-outline" class="icon" data-id="${id}"></ion-icon>
          </div>
        </div>
      `;

      cartList.appendChild( cartProduct );
  
    });
  } else {
    const message = document.createElement('P');
    message.textContent = 'No hay artículos en tu carrito';
    message.classList.add('text-center');
    cartList.appendChild( message );
    cartPrice.textContent = `$0.00`;
  }

  calculateSubTotal();

  localStorage.setItem( 'productsOnCart', JSON.stringify( productsOnCart ));

}

function calculateSubTotal() {

  if ( productsOnCart.length ) {
    subtotal = productsOnCart.reduce( (total, product) =>  total + product.price * product.amount, 0 );

    cartPrice.textContent = `$${subtotal.toFixed(2)}`;
  }

}

function editProduct( e ) {

  if ( e.target.classList.contains('minus') ) {

    const idProduct = e.target.parentElement.parentElement.querySelector('.icon').getAttribute('data-id');

    addMinusAmount( idProduct, 'minus' );

  } else if ( e.target.classList.contains('plus')) {

    const productClicked = e.target.parentElement.parentElement.parentElement;

    const idProduct = productClicked.querySelector('.icon').getAttribute('data-id');

    if ( Number( productClicked.querySelector('.cart__amount').textContent ) < 5 ) {
      addMinusAmount( idProduct, 'plus' );
    } else {
      alerts('No es posible agregar más de 5 productos', 'danger');
    }

  } else if ( e.target.classList.contains('icon') ) {
    deleteProductOnCart( e.target.getAttribute('data-id') );
  }

}

function deleteProductOnCart( idProduct ) {
  productsOnCart = productsOnCart.filter( ({id}) => id !== idProduct );
  console.log( productsOnCart.length );
  alerts('Producto eliminado', 'success');
  createProductsOnCart();
}

function addMinusAmount( idProduct, signe ) {

  let newProducts = [];

  for ( let i = 0; i < productsOnCart.length; i++ ) {
    if ( productsOnCart[i].id === idProduct ) {
      signe === 'plus' ? productsOnCart[i].amount++ : productsOnCart[i].amount--;
      alerts('Cantidad modificada', 'success');
    } 
    if ( productsOnCart[i].amount ) {
      newProducts.push( productsOnCart[i] );
    } else {
      alerts('Producto eliminado', 'success');
    }
  }

  productsOnCart = [...newProducts];

  createProductsOnCart();

}