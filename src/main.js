import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/globle.css";

import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faAnglesRight,
  faRepeat,
  faSearch,
  faShoppingCart,
  faSignIn,
  faSignOut,
  faUser,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";
import { faRegistered } from "@fortawesome/free-regular-svg-icons";

/* add icons to the library */
library.add(
  faUserSecret,
  faUser,
  faSearch,
  faShoppingCart,
  faAnglesRight,
  faSignIn,
  faRegistered,
  faSignOut,
  faSearch,
  faRepeat
);

createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
