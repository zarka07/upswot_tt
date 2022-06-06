<template>
  <Header />

  <div class="container">
    <div style="width: 100%">
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
              <div class="article__title">
                <strong>Interactive Reporting </strong>
              </div>
              <div class="article__text">
                In just a few clicks, you can connect your data from 1C, CRM
                (Bitrix24, AmoCRM, ZohoCRM), E-commerce (PROM.UA, Rozetka,
                ebay), Logistic (Nova Poshta), Google Analytics and many more
                systems that reflect different aspects of business activities.
              </div>
            </div>
          </div>
          <div class="description__article">
            <img
              class="article__vector"
              src="../assets/Vector.png"
              alt="vector"
            />
            <div class="article">
              <div class="article__title">
                <strong>Automated data updates</strong>
              </div>
              <div class="article__text">
                The application automatically updates and structures the data in
                just 60 seconds, saving you time and money.
              </div>
            </div>
          </div>
          <div class="description__article">
            <img
              class="article__vector"
              src="../assets/Vector.png"
              alt="vector"
            />
            <div class="article">
              <div class="article__title">
                <strong>Data Security</strong>
              </div>
              <div class="article__text">
                The Bank guarantees the safety of your personal data, ensuring
                their integrity and confidentiality.
              </div>
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
@media only screen and (min-width: 1201px) {
  .container{
    height: 100%;
  }
  .top-section {
    background-size: cover;
    height: 50vh;
  }
  .main-title__text {
    font-size: 40px;
  }
  .description__title {
    margin-bottom: 40px;
  }
  .bottom-section__description {
    margin-left: 20%;
  }
  .bottom-section__description {
    margin-left: 20%;
    width: 40%;
  }
  .article {
    font-size: 11px;
  }
  
}
@media only screen and (max-width: 1200px) {
  .top-section {
    background-size: cover;
    height: 40vh;
  }
  .main-title__text {
    font-size: 30px;
  }
  .description__title {
    margin-bottom: 30px;
  }
   .bottom-section__description {
    margin-left: 20%;
    width: 40%;
  }
  .article {
    font-size: 10px;
  }

}
@media only screen and (max-width: 992px) {
  .top-section {
    background-size: cover;
    height: 30vh;
  }
  .main-title__text {
    font-size: 20px;
  }
  .description__title {
    margin-bottom: 20px;
  }
   .bottom-section__description {
    margin-left: 10%;
    width: 45%;
  }
  .article__title {
    font-size: 10px;
  }
  
}
@media only screen and (max-width: 768px) {
  .top-section {
    background-size: cover;
    height: 20vh;
  }
  .main-title__text {
    font-size: 15px;
  }
  .description__title {
    margin-bottom: 15px;
  }
  .bottom-section__description {
    margin-left: 5%;
    width: 90%;
  }
  .article {
    font-size: 11px;
  }
}
@media only screen and (max-width: 576px) {
  
  .top-section {
    background-size: cover;
    height: 15vh;
  }
  .main-title__text {
    font-size: 11px;
  }
  .description__title {
    margin-bottom: 10px;
  }
  .bottom-section__description {
    margin-left: 5%;
    width: 90%;
  }
  .article {
    font-size: 11px;
  }
}
@media only screen and (max-width: 376px) {
  .container{
    height: 76vh!important;
  }
  .top-section {
    background-size: cover;
    height: 15vh;
  }
  .main-title__text {
    font-size: 10px;
  }
  .description__title {
    margin-bottom: 10px;
  }
  .bottom-section__description {
    margin-left: 5%;
    width: 90%;
  }
  .bottom__description__analytics {
    font-size: 11px;
  }
  .article {
    font-size: 11px;
  }
}

.container {
  display: flex;
  justify-content: center;
  height:100%;
  /* width: 100%;
  flex-direction: column; */
}

.top-section {
  display: flex;
  align-items: flex-end;
  background-image: url(../assets/Background.png);
  background-repeat: no-repeat;
}

.description__title {
  margin-left: 20%;
  line-height: 1.5;
  text-align: left;
}

.main-title__text {
  color: rgb(255, 255, 255) !important;
  line-height: 1.5;
  margin: 0;
  font-weight: 700;
}

.bottom-section {
  height: 50vh;
  display: flex;
  flex-flow: column;
}

.bottom-section__description {
  line-height: 1.5;
  text-align: left;
}

.bottom__description__analytics {
  font-size: 11px;
}

.description__article {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 5px;
}

.article {
  /* line-height: 1.5; */
  margin-left: 15px;
}

.article__vector {
  width: 13px;
  margin-top: 3px;
}

.article__title {
}

.article__text {
  margin-top: 4px;
  font-size: 10px;
}

.form {
  background-color: #fff;
  width: 250px;
  height: 250px;
  padding: 25px;
}
</style>