Vue.component('cart', {
  props: ['cart', 'img', 'visibility'],
  template: `<div class="cart-block" v-show="visibility">
    <p v-if="!cart.length">Cart is empty</p>
    <cart-item v-for="item of cart"
    :key="item.id_product"
    :img="img"
    :cartItem="item"></cart-item> 
  </div>`
});

Vue.component('cart-item', {
  props: ['cartItem', 'img'],
  template: `
    <div class="cart-item">
                     <div class="product-bio">
                        <img :src="img" alt="Some image">
                        <div class="product-desc">
                            <p class="product-title">{{ cartItem.product_name }}</p>
                            <p class="product-quantity">Quantity: {{ cartItem.quantity }}</p>
                            <p class="product-single-price">$ {{ cartItem.price }} each</p>
                        </div>
                      </div>
                        <div class="right-block">
                            <p class="product-price">{{ cartItem.quantity*cartItem.price }}</p>
                            <button class="del-btn" @click="$root.remove(cartItem)">&times;</button>
                        </div>
    </div>`
});



