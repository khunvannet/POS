import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/globle.css";

import { library } from "@fortawesome/fontawesome-svg-core";

/* Import Font Awesome icon components */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* Import specific icons */
import {
  faAnglesRight,
  faRepeat,
  faSearch,
  faShoppingCart,
  faSignIn,
  faSignOut,
  faTrash,
  faUser,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";

import {
  faRegistered,
  faUserCircle,
  faEnvelope,
  faCreditCard, // Import credit card icon for payment
} from "@fortawesome/free-regular-svg-icons";

/* Add icons to the library */
library.add(
  faUserSecret,
  faUser,
  faUserCircle,
  faEnvelope,
  faSearch,
  faShoppingCart,
  faAnglesRight,
  faSignIn,
  faRegistered,
  faSignOut,
  faSearch,
  faRepeat,
  faTrash,
  faCreditCard // Add credit card icon
);

createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
