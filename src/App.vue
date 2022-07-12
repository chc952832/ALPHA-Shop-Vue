<template>
  <div id="alpha-shop">
    <!-- Navbar -->
    <Navbar />
    <!-- Main -->
    <div class="main-content">
      <router-view/>
    </div>
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
/* 載入字型 */
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&display=swap');
</style>