<template>
  <div class="cart-wrapper">
    <h4 class="cart-title d-none">購物籃</h4>
    <div class="product-wrapper">
      <div class="product" v-for="product in cartProducts" :key="product.id">
          <img :src="product.imgUrl" class="product-picture" alt="product-picture">
          <div class="product-detail">
            <span class="product-title">{{product.name}}</span>
            <div class="cart-btns">
              <button class="cart-btn minus-btn"  :disabled="product.quantity === 0" @click.stop.prevent="decreaseQuantity(product)">-</button>
              <span class="product-quantity">{{product.quantity}}</span>
              <button class="cart-btn plus-btn" @click.stop.prevent="addQuantity(product)">+</button>
            </div>
            <span class="product-price">${{product.price}}</span>
          </div> 
      </div>
      <div class="cart-detail">
        <div class="delivery-fee-wrapper">
          <span class="delivery-fee-title">運費</span>
          <span class="delivery-fee">{{deliveryFee | modifyDeliveryFeeDisplay}}</span>
        </div>
        <div class="total">
          <span class="total-title">小計</span>
          <span class="total-price">${{getTotal()}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {v4 as uuidv4} from 'uuid'
const dummyData = {
  cartProducts : [
  {
    id: uuidv4(),
    name: '破壞補丁修身牛仔褲',
    imgUrl: require('./../assets/image/product-img-1.png'),
    price: '3,999',
    quantity: 1
  },
  {
    id: uuidv4(),
    name: '刷色直筒牛仔褲',
    imgUrl: require('./../assets/image/product-img-2.png'),
    price: '1,299',
    quantity: 1
  }
 ]
}

export default {
  name: 'Cart',
  props: {
    deliveryFee: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      cartProducts: [],
      total: 0
    }
  },
  created() {
    this.fetchCartList()
  },
  methods: {
    fetchCartList() {
      this.cartProducts = dummyData.cartProducts
    },
    addQuantity(product) {
      return product= {...product,
        quantity: product.quantity += 1
      }
    },
    decreaseQuantity(product) {
      return product= {...product,
        quantity: product.quantity -= 1
      }
    },
    getTotal() {
      let totalPrice = 0
      this.cartProducts.forEach(product => {
        // 將逗號清除並轉換成數字
        const productPrice = Number(product.price.replace(',', ''))
        totalPrice += productPrice * product.quantity
      });
      this.total = totalPrice + this.deliveryFee
      return this.total.toLocaleString()  // 每三位數加上逗號
    }
  },
  filters: {
    modifyDeliveryFeeDisplay(amount) {
      return amount === 0 ? "免費" : '$500'
    }
  }
}
</script>