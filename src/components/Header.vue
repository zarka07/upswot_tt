<template>
  <div class="header">
    <div class="header__top-background"></div>
    <div class="header__bottom-background">
      <img class="header__logo" src="../assets/Logo.png" alt="Logo" />
    </div>
  </div>
</template>

<script>
export default {
  name: "header-component",
};
</script>

<style scoped>
.header {
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100%;
}

.header__top-background {
  background-color: #333333;
  height: 30%;
}

.header__bottom-background {
  background: linear-gradient(#00afed 0%, #00569a 100%);
  height: 70%;
  display: flex;
  align-items: center;
  /* justify-content:var(); */
  
}

.header__logo {
  height: 50px;
  padding-left:20%;
}

</style>