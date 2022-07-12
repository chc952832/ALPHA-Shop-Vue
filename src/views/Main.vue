<template>
  <div class="container main-container">
    <h1>結帳</h1>
    <!-- left -->
      <!-- step -->
      <!-- form -->
      <Form @get-delivery-fee="getDeliveryFee"/>
      <!-- button control -->
    <!-- right -->
    <div class="right">
      <div class="container">
        <Cart :delivery-fee="deliveryFee"/>
      </div>
    </div>
  </div>
</template>

<script>
import Form from './../components/Form.vue'
import Cart from './../components/Cart.vue'
export default {
  name: "Main",
  components: {
    Form,
    Cart
  },
  data() {
    return {
      deliveryFee : 0
    }
  },
  methods: {
    getDeliveryFee(deliveryFee) {
      this.deliveryFee = deliveryFee
    }
  }
};
</script>