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
          <ion-button @click="Profile" class="post">Save Changes</ion-button>
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
    margin-left: 75px;
    margin-right: 100px;
    height: 50px;
    width: 150px;
    background-color: #949494;
    color: #000000;
  }
  .add {
    margin-left: 20px;
    margin-top: 25px;
    font-size: 12px;
    height: 97px;
    width: 108px;
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
