<template>
  
  <ul>
    <p>{{ localProduct }}</p>
    <li v-for="(product,index) in products" :key=index>
      {{ product.title }} - {{ product.price }}
      <br>
      <button
        :disabled="!product.inventory"
        @click="addProductToCart(product)">
        Add to cart
      </button>
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState({
      products: state => {
        return state.products.all
      },
      localProduct: state => {
        return state.products
      }
    }),
    // localProduct() {
    //   window.console.log(this.$store.state)
    //   return this.$store.state.products
    // }
  },
  methods: mapActions('cart', [
    'addProductToCart'
  ]),
  created () {
    this.$store.dispatch('products/getAllProducts')
  }
}
</script>