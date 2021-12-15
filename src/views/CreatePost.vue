<template>
  <ion-content :fullscreen="true" class="ok">
    <ion-toolbar color="dark">
      <ion-button @click="Profile" slot="start" class="button-resize">
          <ion-img :src="arrow" class="arrow"></ion-img>
          </ion-button>
        <ion-title></ion-title>
    </ion-toolbar>

    <ion-item>
      <ion-label position="fixed">Title:</ion-label>
      <ion-input></ion-input>
    </ion-item>
    <ion-item>
      <!-- Input with placeholder -->
      <ion-label position="stacked">DESCRIPTION</ion-label>
      <ion-input placeholder="Enter Description"></ion-input>
    </ion-item>
    <ion-button class="add">+ add photos</ion-button>

    <ion-footer class="okeh">
      <ion-toolbar color="dark">
        <ion-buttons slot="end">
          <ion-button class="post">POST</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-footer>
  </ion-content>
</template>

<script lang="js">
import { IonInput, IonItem, IonFooter } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { IonInput, IonItem, IonFooter },
   data() {
    return {
      arrow: "../../assets/bg/others/backarrow.png",
    };
  },
    methods: {
    Profile(){
      this.$router.push("/profile");
    }
  }
});
</script>
<style lang="scss">
.ok {
  position: relative;
  .okeh {
    position: absolute;
    bottom: 0;
  }
  .post {
    margin-left: 50px;
    margin-right: 125px;
    height: 50px;
    width: 88px;
    background-color: #949494;
    border: none;
    color: #000000;
  }
  .add {
    font-size: 12px;
    height: 97px;
    width: 108px;
    --background: #444444;
    color: #ffffff;
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
</style>
