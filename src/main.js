import 'bootstrap/dist/css/bootstrap.min.css';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import AppLogo from './components/AppLogo.vue'

import BaseButton from './components/BaseButton.vue'

import CarouselButton from './components/CarouselButton.vue'

//Importo le singole icone
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faClock, faEnvelope, faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';


library.add(faArrowRight, faBars, faAngleRight, faAngleLeft, faAt, faLocationDot, faClock, faEnvelope, faCopyright, faFacebookF, faSquareInstagram, faTwitter, faCheck, faXmark, faPhoneVolume);
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);

app.component('FontAwesomeIcon', FontAwesomeIcon)
app.component('AppLogo',AppLogo)
app.component('BaseButton',BaseButton)
app.component('CarouselButton',CarouselButton)


app.mount('#app')
