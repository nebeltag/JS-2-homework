const cartItem = {
  props: ['cart_item', 'img'],
  template: `
    <div class="cart-item">
                     <div class="product-bio">
                        <img :src="img" alt="Some image">
                        <div class="product-desc">
                            <p class="product-title">{{ cart_item.product_name }}</p>
                            <p class="product-quantity">Quantity: {{ cart_item.quantity }}</p>
                            <p class="product-single-price">$ {{ cart_item.price }} each</p>
                        </div>
                      </div>
                        <div class="right-block">
                            <p class="product-price">{{ cart_item.quantity*cart_item.price }}</p>
                            <button class="del-btn" @click="$parent.remove(cart_item)">&times;</button>
                        </div>
    </div>`
}

const cart = {
  components: { 'cart-item': cartItem },
  data() {
    return {
      cartUrl: '/getBasket.json',
      cart: [],
      show: false,
      imgCart: 'https://via.placeholder.com/50x100'
    }
  },

  methods: {
    addProduct(item) {
      this.$parent.getJson(`${API}/addToBasket.json`)
        .then(data => {
          if (data.result === 1) {
            let find = this.cart.find(el => el.id_product === item.id_product);
            if (find) {
              find.quantity++;
            } else {
              const prod = Object.assign({ quantity: 1 }, item)
              this.cart.push(prod);
            }
          }
        });
    },

    remove(item) {
      this.$parent.getJson(`${API}/deleteFromBasket.json`)
        .then(data => {
          if (data.result === 1) {

            if (item.quantity > 1) {
              item.quantity--;
            } else {

              this.cart.splice(this.cart.indexOf(item), 1)
            }
          }
        });
    }
  },

  mounted() {
    this.$parent.getJson(`${API + this.cartUrl}`)
      .then(data => {
        for (let el of data.contents) {
          this.cart.push(el);
          // console.log(this.cart);
        }
      });
  },

  template: `<div>
    <button class="btn-cart" type="button" @click="show=!show">Корзина</button>
    <div class="cart-block" v-show="show">
      <p v-if="!cart.length">Cart is empty</p>
      <cart-item v-for="item of cart"
      :key="item.id_product"
      :img="imgCart"
      :cart_item="item"></cart-item> 
    </div>
  </div>`
}





