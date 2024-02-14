import 'bootstrap/dist/css/bootstrap.min.css';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import AppLogo from './components/AppLogo.vue'

import BaseButton from './components/BaseButton.vue'

import CarouselButton from './components/CarouselButton.vue'

//  Importo le singole icone
// Icone solid
import {
    faArrowRight,
    faBars,
    faAngleRight,
    faAngleLeft,
    faAt,
    faLocationDot,
    faCheck,
    faXmark,
    faPhoneVolume
} from '@fortawesome/free-solid-svg-icons';

// Icone regular
import { faClock, faEnvelope, faCopyright } from '@fortawesome/free-regular-svg-icons';

// Icone brands
import { faFacebookF, faSquareInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


library.add(faArrowRight, faBars, faAngleRight, faAngleLeft, faAt, faLocationDot, faClock, faEnvelope, faCopyright, faFacebookF, faSquareInstagram, faTwitter, faCheck, faXmark, faPhoneVolume);
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);

app.component('FontAwesomeIcon', FontAwesomeIcon)
app.component('AppLogo', AppLogo)
app.component('BaseButton', BaseButton)
app.component('CarouselButton', CarouselButton)


app.mount('#app')
