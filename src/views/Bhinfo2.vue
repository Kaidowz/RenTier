<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
        <ion-toolbar color="dark">
          <ion-button @click="Bhinfo" slot="start" class="button-resize">
            <ion-img :src="arrow" class="arrow"></ion-img>
          </ion-button>
        </ion-toolbar>
        <ion-card>
          <ion-img :src="logo" class="logo1"></ion-img>
          <ion-card-title class="name">Fortunato Osorio III</ion-card-title>
          <ion-card-subtitle class="text">
            <span class="number">09123456789</span>
            <span class="tel">521-0954</span>
          </ion-card-subtitle>
          <ion-card-content>BIO:</ion-card-content>
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
  IonButtons,
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
    IonButtons,
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
  Bhinfo(){
    this.$router.push("/bhinfo");
  },
}
});
</script>

<style lang="scss">
.name {
  text-align: center;
  padding: 10px;
}
.text {
  display: flex;
  text-align: center;
  .number {
    width: 50%;
  }
  .tel {
    width: 50%;
  }
}
.logo1 {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
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

ion-toolbar {
    ion-item {
  --background: url("/assets/bg/bg.jpg") no-repeat cover fixed center;
  background: url("/assets/bg/bg.jpg") no-repeat fixed center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
}
ion-card {
  --background: url("/assets/bg/bg.jpg") no-repeat cover fixed center;
  background: url("/assets/bg/bg.jpg") no-repeat fixed center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
}
ion-content {
  --background: url("/assets/bg/bg.jpg") no-repeat cover fixed center;
  background: url("/assets/bg/bg.jpg") no-repeat fixed center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
}

}
</style>
