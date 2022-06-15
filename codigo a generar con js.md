<!-- ARTICULO EN EL GRID -->
<div class="product">
  <picture>
    <source srcset="/img/1.avif" type="image/avif">
    <source srcset="/img/1.webp" type="image/webp">
    <img loading="lazy" src="/img/1.jpg" alt="product 1"/>
  </picture>
  <p class="product__title">Playera gris &mdash; lisa</p>
  <div class="product__priceBox">
    <a href="#" class="btn btn--round add-cart" data-id="1">Ver</a>
    <p class="product__price">$265.00</p>
  </div>
</div>

<!-- ARTICULO EN CARRITO -->
<li class="cart__product">
  <picture class="cart__imageBox">
    <source srcset="/img/1.avif" type="image/avif">
    <source srcset="/img/1.webp" type="image/webp">
    <img loading="lazy" src="/img/1.jpg" class="cart__image" alt="Artículo en el carrito"/>
  </picture>
  <div class="cart__info">
    <p class="cart__title">Camisa gris - lisa</p>
    <p class="cart__price">$199.99</p>
    <p class="cart__size">Talla: S</p>
            
    <div class="cart__buttons">
      <div class="cart__amountBox">
        <button class="minus">&minus;</button>
        <p class="cart__amount">1</p>
        <button class="plus">&plus;</button>
      </div>
      <ion-icon name="trash-outline" class="icon"></ion-icon>
    </div>
  </div>
</li>

<!-- ARTICULO RESUMEN -->
      <li class="productCart">
        <picture class="productCart__imageBox">
          <source srcset="/img/1.avif" type="image/avif">
          <source srcset="/img/1.webp" type="image/webp">
          <img class="productCart__image" loading="lazy" src="/img/1.jpg" alt="Producto en carro"/>
        </picture>

        <div class="productCart__info">
          <p class="productCart__title">Camisa gris - lisa</p>
          <p class="productCart__price">Precio: <span>$199.99</span></p>
          <p class="productCart__size">Talla: <span>S</span></p>
          <p class="productCart__amount">Cantidad: <span>2</span></p>
          <img src="/img/Academlo.svg" alt="Academlo logo" class="productCart__logo">
        </div>
      </li>