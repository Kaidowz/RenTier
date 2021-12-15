<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
        <ion-toolbar color="dark"> 
          <ion-button @click="Home" slot="start" class="button-resize">
            <ion-img :src="arrow" class="arrow"></ion-img>
          </ion-button>
          <ion-title></ion-title>
        </ion-toolbar>
        <ion-card>
          <ion-img :src="logo" @click="Bhinfo" class="logo"></ion-img>
          <ion-card-title>Boarding House 1</ion-card-title>
          <ion-card-content>Boarding House Details zzz</ion-card-content>
        </ion-card>
        <ion-card>
          <ion-img :src="logo" @click="Bhinfo" class="logo"></ion-img>
          <ion-card-title>Boarding House 2</ion-card-title>
          <ion-card-content>Boarding House Details zzz</ion-card-content>
        </ion-card>
        <ion-card>
          <ion-img :src="logo" @click="Bhinfo" class="logo"></ion-img>
          <ion-card-title>Boarding House 3</ion-card-title>
          <ion-card-content>Boarding House Details zzz </ion-card-content>
        </ion-card>
        <ion-toolbar class="uhm" color="dark">
        <ion-buttons slot="end"> </ion-buttons>
      </ion-toolbar>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="js">
import {
  IonToolbar,
  IonButton,
  IonCardTitle,
  IonCard,
  IonCardContent,
  IonImg,
  IonContent,
  IonPage,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    IonToolbar,
    IonButton,
    IonCardTitle,
    IonCard,
    IonCardContent,
    IonImg,
    IonContent,
    IonPage,
  },
  data() {
    return {
      logo: "../../assets/bg/others/templogo.png",
      arrow: "../../assets/bg/others/backarrow.png",
    };
  },
    methods: {
    Home(){
      this.$router.push("/home");
    },
    Bhinfo(){
      this.$router.push("/bhinfo");
    }
  }
});
</script>

<style lang="scss">
#container {
  ion-toolbar {
    --background: #222222;
  }
}

.button-resize {
  padding: 6px 6px;
  --background: none;
  --box-shadow: none;
}
.arrow {
  height: 80%;
  vertical-align: middle;
}
ion-card {
  --background: url("/assets/bg/bg.jpg") no-repeat cover fixed center;
  background: url("/assets/bg/bg.jpg") no-repeat fixed center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
}
</style>
