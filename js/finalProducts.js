import { alerts, cleanContainer } from "./generalFunctions.js";
import { productsFinalCon, btnEnd } from "./selectors.js";
import { cleanCart } from "./shoppingCart.js";

document.addEventListener('DOMContentLoaded', showFinalProducts);
btnEnd.addEventListener('click', () => {
  alerts('Tu carrito se ha vaciado', 'success');
  cleanCart(); 
});

const productsOnLocalSto = JSON.parse( localStorage.getItem('productsOnCart') );

function showFinalProducts() {
  
  cleanContainer( productsFinalCon );

  productsOnLocalSto.forEach( ({img, imgWebp, imgAvif}) => {

    const productFinalDiv = document.createElement('DIV');
    productFinalDiv.classList.add('productFinal__imageBox');

    productFinalDiv.innerHTML = `
      <source srcset="${imgAvif}" type="image/avif">
      <source srcset="${imgWebp}" type="image/webp">
      <img loading="lazy" class="productFinal__image" src="${img}" alt="Imagen del producto final"/>
    `;

    productsFinalCon.appendChild( productFinalDiv );

  });

}