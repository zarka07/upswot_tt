<template>

  <Header />

  <div class="container">
    <div style="width:100%">
      <div class="top-section">
        <div class="description__title">
          <p class="main-title__text">Welcome to</p>
          <p class="main-title__text">Business Analytics Online</p>
        </div>
      </div>

      <div class="bottom-section">
        <div class="bottom-section__description">
          <p class="bottom__description__analytics">
            <strong>Business Analytics</strong> — a new, convenient tool for
            managing and forecasting your business performance, which will help
            analyze your own finances and cash flows, visualize your reporting,
            business processes, KPI's
          </p>

          <div class="description__article">
            <img
              class="article__vector"
              src="../assets/Vector.png"
              alt="vector"
            />
            <div class="article">
              <span class="article__title"> Interactive Reporting </span><br />
              <span class="article__text">
                In just a few clicks, you can connect your data from 1C, CRM
                (Bitrix24, AmoCRM, ZohoCRM), E-commerce (PROM.UA, Rozetka,
                ebay), Logistic (Nova Poshta), Google Analytics and many more
                systems that reflect different aspects of business activities.
              </span>
            </div>
          </div>
          <div class="description__article">
            <img
              class="article__vector"
              src="../assets/Vector.png"
              alt="vector"
            />
            <div class="article">
              <span class="article__title"> Automated data updates </span><br />
              <span class="article__text">
                The application automatically updates and structures the data in
                just 60 seconds, saving you time and money.
              </span>
            </div>
          </div>
          <div class="description__article">
            <img
              class="article__vector"
              src="../assets/Vector.png"
              alt="vector"
            />
            <div class="article">
              <span class="article__title"> Data Security </span><br />
              <span class="article__text">
                The Bank guarantees the safety of your personal data, ensuring
                their integrity and confidentiality.
              </span>
            </div>
          </div>
        </div>
      </div>
      <!-- <form class="form" @submit.prevent="onSubmit()">
        <div class="">
          <label for="floatingInput">Name</label>
          <input
            type="text"
            class=""
            id="floatingInput"
            autocomplete="username"
            v-model.trim="username"
          />
        </div>

        <div class="">
          <label for="floatingPassword">Password</label>
          <input
            type="password"
            class=""
            id="floatingPassword"
            autocomplete="current-password"
            v-model.trim="password"
          />
        </div>

        <button type="submit" class="">LOGIN</button>

        <div class="">
          <router-link class="" to="/forgotPassword"
            >Forgot password</router-link
          >
        </div>

        <button type="submit" class="">REGISTER NOW</button>
      </form> -->
    </div>
  </div>

  <Footer />
  
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "LoginView",

  components: { Header, Footer },

  data() {
    return {
      username: "",
      password: null,
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  height:100%;
  width: 100%;
  flex-direction: column;
}

.top-section {
  display: flex;
  align-items: flex-end;
  height: 50vh;
  background-image: url(../assets/Background.png);
  background-repeat: no-repeat;
  background-size:cover;
}

.description__title {
  margin-bottom: 20px;
  margin-left: 20%;
  line-height: 1.5;
  text-align: left;
}

.main-title__text {
  color: rgb(255, 255, 255) !important;
  line-height: 1.5;
  font-size: 35px;
  margin: 0;
}

.bottom-section {
  height: 50vh;
  display: flex;
  flex-flow: column;
}

.bottom-section__description {
  margin-left: 20%;
  line-height: 1.5;
  text-align: left;
  width: 35%;
}

.bottom__description__analytics {
  font-size: 11px;
}

.description__article {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 10px;
}

.article {
  font-size: 10px;
  line-height: 1.5;
  margin-left: 15px;
}

.article__vector {
  width: 13px;
  margin-top: 5px;
}

.article__title {
  font-size: 13px;
  margin-bottom: 1px;
}

.article__text {
}

.form {
  background-color: #fff;
  width: 250px;
  height: 250px;
  padding: 25px;
}
</style>