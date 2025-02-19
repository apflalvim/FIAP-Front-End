import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin, faInstagram, faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faGithub, faLinkedin, faInstagram, faWhatsapp, faTelegram);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
});
