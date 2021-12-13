<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
        <ion-buttons slot="start" class="menu">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
      </div>
  <ion-item class="profile">
    <ion-avatar slot="start">
      <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
    </ion-avatar>
    <ion-label>Item Avatar</ion-label>
  </ion-item>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButtons, IonContent, IonMenuButton, IonPage } from "@ionic/vue";

export default {
  name: "Folder",
  components: {
    IonButtons,
    IonContent,
    IonMenuButton,
    IonPage,
  },
  data() {
    return {
      profile: "../../assets/bg/logo.png",
    };
  },
};
</script>


<style lang="scss" scoped>
ion-content {
  --background: url("/assets/bg/bg.png") no-repeat cover fixed center;
  background: url("/assets/bg/bg.png") no-repeat fixed center;
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
.profile {
    margin-top: 10px;
}
ion-button {
  height: 50px;
  margin-top: 20px;
}
</style>