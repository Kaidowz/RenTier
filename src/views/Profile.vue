<template>
  <ion-page>
    <ion-content :fullscreen="true">
<ion-toolbar color="dark">
          <ion-button @click="Login" slot="start" class="button-resize">
            <ion-img :src="signout" class="arrow"></ion-img>
          </ion-button>
        </ion-toolbar>
    <ion-list>
    <ion-item>
        <div class="profile">
        <ion-img :src="profile" class="profile" slot="start"></ion-img>
        </div>
        <ion-button class="addprofile">+</ion-button>

    <div class="text">
    <ion-text>
      <h4>F and G Boarding House</h4>
      <p>BIO: The Quick little brown fox jumps over the head</p>
      </ion-text>
    </div>
  </ion-item>
    </ion-list>
    <div class="createpostbutton">
      <ion-button @click="CreatePost" expand="full" class="create">Create Post</ion-button>
      </div>

        <ion-button @click="Savechanges" expand="full" class="posts">Edit Post</ion-button>
        <ion-button @click="Savechanges" expand="full" class="posts2">Edit Post</ion-button>

    </ion-content>
  </ion-page>
</template>

<script lang="js">
import { IonContent, IonPage, IonImg, } from "@ionic/vue";

export default {
  name: "Folder",
  components: {
    IonContent,
    IonPage,
    IonImg,
  },
  data() {
    return {
      profile: "../../assets/avatar/avatar.png",
      signout: "../../assets/bg/others/signout.png",
    };
  },
    methods: {
    CreatePost(){
      this.$router.push("/createpost");
    },
    Savechanges(){
      this.$router.push("/savechanges");
    },
    Login(){
      this.$router.push("/login");
    }
  }
  
};
</script>


<style lang="scss" scoped>
ion-content {
  --background: url("/assets/bg/profile.jpg") no-repeat cover fixed center;
  background: url("/assets/bg/profile.jpg") no-repeat fixed center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
}



ion-thumbnail {
  --border-radius: 30px;
}

ion-item {
  --background: url("/assets/bg/profile.jpg") no-repeat cover fixed center;
  background: url("/assets/bg/profile.jpg") no-repeat fixed center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
}

ion-list {
    --background: url("/assets/bg/profile.jpg") no-repeat cover fixed center;
  background: url("/assets/bg/profile.jpg") no-repeat fixed center;
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

.text {
  text-align: center;
  text-size-adjust: 10%;
}

.button1 {
  margin-left: 1px;
  height: 1px;
  width: 2px;
}

.profile {
  height: 100px;
}

.createpostbutton {
  margin-left: 50px;
  margin-right: 50px;
  --background: #949494;
  color: #ffffff;
}

.create {
  --background: #757575;
  color: #ffffff;
}

.addprofile {
  --background: #757575;
  color: #ffffff;
}

.posts {
  margin-top: 80px;
  margin-right: 70px;
  margin-left: 70px;
  height: 15%;
  align-content: center;
  padding-top: 10px;
  --background: #444444;
  color: #ffffff;
}

.posts2 {
  margin-top: 30px;
  margin-right: 70px;
  margin-left: 70px;
  height: 15%;
  align-content: center;
  padding-top: 10px;
  --background: #444444;
  color: #ffffff;
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