import { createApp } from "vue";
import Header from "../components/Header/Header.vue";
import Footer from "../components/Footer/Footer.vue";
import App from "../App.vue";

export default function placeHolder(el, component) {
  if (component == "Header") {
    createApp(Header).mount(el);
  } else if (component == "App") {
    createApp(App).mount(el);
  } else if (component == "Footer") {
    createApp(Footer).mount(el);
  }
}
