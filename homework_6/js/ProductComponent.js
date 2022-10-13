const product = {
  props: ['product', 'img'],
  template: `<div class="product-item">
                 <img :src="img" alt="Some img"> 
                 <div class="desc">
                 <h3>{{product.product_name}}</h3>
                 <p>{{product.price}}</p>
                 <button class="buy-btn" @click="$root.$refs.cart.addProduct(product)">Купить</button>
                 </div> 
             </div>`
}

const products = {
  components: { product },

  data() {
    return {
      catalogUrl: '/catalogData.json',
      products: [],
      filtered: [],
      imgCatalog: 'https://via.placeholder.com/200x150'
    }
  },

  mounted() {

    this.$parent.getJson(`${API + this.catalogUrl}`)
      .then(data => {
        for (let el of data) {
          this.products.push(el);
          this.filtered.push(el);
          // console.log(this.products);
          // console.log(this.filtered);
        }
      });
    this.$parent.getJson(`getProducts.json`)
      .then(data => {
        for (let el of data) {
          this.products.push(el);
          this.filtered.push(el);
          // console.log(this.products);
          // console.log(this.filtered);
        }
      });
  },

  methods: {
    filter(val) {
      const regexp = new RegExp(val, 'i');
      this.filtered = this.products.filter(product => regexp.test(product.product_name));
      console.log(this.filtered);
    }
  },

  template: `<div class="products">
    <product v-for="item of filtered"
    :key="item.id_product"
    :img="imgCatalog"
    :product="item"></product>
  </div>`
}



{/* <button class="buy-btn" @click="$root.addProduct(product)">Купить</button> более простой вариант */ }
