"use strict";

// ##############################################
// CONTAINERS
// ##############################################

const productContainer = document.querySelector('#products-container');
const selectEl = document.querySelector('#select-products');
const cart = document.querySelector('#cart');
const cartList = document.querySelector('#cart__list');
const productsToShow = document.querySelector('#productsToShow');
const productsFinalCon = document.querySelector('#productsFinal__grid');

// ##############################################
// BUTTONS
// ##############################################

const btnWhite = document.querySelector('#btnWhite');
const cartBtn = document.querySelector('#cartBtn');
const closeBtn = document.querySelector('#closeBtn');
const cleanBtn = document.querySelector('#cleanBtn');
const downBtn = document.querySelector('#btnDown');
const btnEnd = document.querySelector('#btnFin');

const cartPrice = document.querySelector('#cartPrice');
const subTotalGeneral = document.querySelector('#subtotal__general');
const total = document.querySelector('#total');

// ##############################################
// EXPORTS
// ##############################################

export {
  productContainer,
  selectEl,
  cart,
  cartList,
  cartBtn, 
  cartPrice,
  closeBtn,
  cleanBtn,
  downBtn,
  btnWhite,
  btnEnd,
  productsToShow,
  subTotalGeneral,
  productsFinalCon,
  total
}