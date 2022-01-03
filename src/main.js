import {createApp} from 'vue'
import App from './App.vue'
import '/public/index.css'
import store from "/src/vuex/store";
import MovieDescription from "./components/MovieDescription";

createApp(App).component('movie-description', MovieDescription)

 createApp(App).use(store).mount('#app')
