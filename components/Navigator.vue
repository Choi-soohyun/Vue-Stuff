<template>
  <section class="nav">
    <div class="nav-back"></div>
    <ul>
      <li><nuxt-link to="/">물건 리스트</nuxt-link></li>
      <li><nuxt-link to="/stuff/new">물건 등록</nuxt-link></li>
    </ul>
  </section> 
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .nav.active { display: block;; }
  .nav { display:none; position:absolute; top:100%; left:0; width: 100%;  }
  .nav ul { position: absolute; top:0; left:0; z-index:99; width: 100%; padding:0px 0px 10px; background: #fff;}
  .nav ul li { padding:5px ​15px; }

  .nav-back { position:absolute; top:100%; left:0; z-index:9; width:100%; height:calc(100vh - 40px); background: rgba(0, 0, 0, 0.2); }
</style>