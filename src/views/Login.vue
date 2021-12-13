<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
        <ion-buttons slot="start" class="menu">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-img :src="logo" class="logo"></ion-img>

        <ion-card>
          <ion-item>
            <ion-label position="floating">Username</ion-label>
            <ion-input type="username"></ion-input>
          </ion-item>
        </ion-card>
        <ion-card>
          <ion-item>
            <ion-label position="floating">Password</ion-label>
            <ion-input type="password"></ion-input>
          </ion-item>
        </ion-card>

        <ion-button expand="block" class="buttonlogin" shape="round">Login</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonButtons,
  IonContent,
  IonMenuButton,
  IonPage,
  IonImg,
} from "@ionic/vue";

export default {
  name: "Folder",
  components: {
    IonButtons,
    IonContent,
    IonMenuButton,
    IonPage,
    IonImg,
  },
  data() {
    return {
      logo: "../../assets/bg/logo.png",
    };
  },
};
</script>


<style lang="scss" scoped>
ion-content {
  --background: url("/assets/bg/bg.gif") no-repeat cover fixed center;
  background: url("/assets/bg/bg.gif") no-repeat fixed center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
}

#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 45%;
  transform: translateY(-50%);
}
.menu {
  position: absolute;
  top: -95px;
}
ion-menu-button {
  color: #ffffff;
}
ion-searchbar {
  border-radius: 25px;
}
#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
.title {
  font-size: 80px;
  color: black;
  -webkit-text-fill-color: white; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  font-family: "Sanchez", serif;
  margin: 0 0 50px 0;
  display: block;
}
.logo {
  height: 150px;
  margin: 0 0 100px 0;
}
ion-button {
  height: 50px;
  margin-top: 20px;
}
.buttonlogin {
    margin-right: 50px;
    margin-left: 50px;
}
</style>