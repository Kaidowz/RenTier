<template>
  <ion-content :fullscreen="true">
    <div id="container">
      <ion-toolbar color="dark">
        <ion-button @click="Bhlist" slot="start" class="button-resize">
          <ion-img :src="arrow" class="arrow"></ion-img>
        </ion-button>
        <ion-title></ion-title>
      </ion-toolbar>

      <ion-item v-for="item in items" :key="item.src">
        <ion-img :src="item.src"></ion-img>

        <ion-label>{{ item.text }}</ion-label>
      </ion-item>
      <ion-card-title class="title">F&G Carenderia</ion-card-title>
      <ion-chip class="rating">
        <ion-icon :icon="star" color="primary"></ion-icon>
        <ion-label>Rating</ion-label>
      </ion-chip>
      <ion-chip class="location">
        <ion-icon :icon="location" color="dark"></ion-icon>
        <ion-label>Location</ion-label>
      </ion-chip>

      <ion-card-content> Boarding House Details </ion-card-content>
      <ion-toolbar class="uhm" color="dark">
        <ion-buttons slot="start"> </ion-buttons>
        <ion-title>
          <span class="payment">2,500Php/month<br />6 units available</span>
        </ion-title>
        <ion-button @click="Bhinfo2" class="lihok">Contact Owner</ion-button>
      </ion-toolbar>
    </div>
  </ion-content>
</template>

<script lang="js">
import {
  IonImg,
  IonContent,
  IonItem,
  IonLabel,
  IonChip,
  IonIcon,
  IonButton,
  IonButtons,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import {
  close,
  closeCircle,
  location,
  star,
  ellipsisOutline,
  personCircle,
} from "ionicons/icons";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    IonImg,
    IonContent,
    IonItem,
    IonLabel,
    IonChip,
    IonIcon,
    IonButton,
    IonButtons,
    IonTitle,
    IonToolbar,
  },
  setup() {
    const items = [
      {
        text: "Item 1",
        src: "/../../assets/bg/others/templogo.png",
      },
    ];
    return {
      items,
      close,
      closeCircle,
      location,
      star,
      ellipsisOutline,
      personCircle,
      arrow: "../../assets/bg/others/backarrow.png",
    };
  },
  methods: {
    Bhinfo2(){
      this.$router.push("/bhinfo2");
    },
    Bhlist(){
      this.$router.push("/bhlist");
    }
  }
});
</script>

<style lang="scss">

.button-resize {
  padding: 6px 6px;
  --background: none;
  --box-shadow: none;
}
ion-content {
  position: relative;
}
.uhm {
  position: fixed;
  bottom: 0;
}
.rating {
  left: 10px;
}
.location {
  position: absolute;
  right: 15px;
}
.title {
  text-align: center;
}
.lihok {
  position: absolute;
  left: 50%;
  bottom: 4%;
  --background: #949494;
  color: #000000;
}
#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}
.arrow {
  height: 80%;
  vertical-align: middle;
}
ion-content {
  --background: url("/assets/bg/bg.jpg") no-repeat cover fixed center;
  background: url("/assets/bg/bg.jpg") no-repeat fixed center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
}
ion-item {
  --background: url("/assets/bg/bg.jpg") no-repeat cover fixed center;
  background: url("/assets/bg/bg.jpg") no-repeat fixed center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
}
</style>
