<script>

// IMRTO
import { professionalData } from '../../../assets/data/index'

export default {
    name: 'ProfessionalSection',

    data: () => ({
        professionalData,
        image: 'assets/img/bike-player',
        profTeam: 'Professional Team',
        textTeam: 'We make you professional by adding your sincerity as well as professionalism.',
        profTrainings: 'Professional Trainings',
        textTraining: 'We always ride with the best equipment, respecting nature and fun.'
    })
}
</script>

<template>

    <!-- SEZIONE PROFESSIONISTI -->

    <section id="professional" v-for="(professional, i) in professionalData" :key="i">
        <div class="container">

            <!-- Imaggini Grafica -->
            <figure>
                <img class="rotate" src="../../../assets/img/bike-circle.png" alt="Bike Circle">
                <img src="../../../assets/img/bike-player.png" alt="Bike Player">
            </figure>

            <!-- articolo professional cyclist-->
            <div class="article-prof-cyclist">
                <article>
                    <h1 class="mb-3 fs-2">{{ professional.title }}</h1>
                    <p>{{ professional.p }}</p>
                </article>
                <img src="../../../assets/img/divider.jpg" alt="Divider">
                <div class="mt-3 d-flex gap-1">
                    <img class="image-helmet" src="../../../assets/img/casco-nero-su-bianco.png" alt="Helmet">
                    <div>
                        <h2 class="fs-5">{{ profTeam }}</h2>
                        <p>{{ textTeam }}</p> 
                    </div>
                </div>
                <div class="mt-3 d-flex gap-2">
                    <img class="image-frontal-helmet" src="../../../assets/img/elmetto-fronte.png" alt="Frontel Helmet">
                    <div>
                        <h2 class="fs-5">{{ profTrainings }}</h2>
                        <p>{{ textTraining }}</p>
                    </div>
                </div>

                <!-- Bottone -->

                <BaseButton text="Get to know us" :hasArrow="true" />
            </div>

        </div>

    </section>

</template>

<style scoped lang="scss">

// SEZIONE
#professional {
    margin-bottom: 100px;

    // CONTENITORE
    .container {
        display: flex;
        align-items: center;
        justify-content: space-around;

        //CONTENITORE IMMAGINI GRAFICA
        figure {
            height: 550px;
            width: 550px;
            background-repeat: no-repeat;
            background-size: contain;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;

            // IMAGINE BIKE 
            img {
                height: 700px;
                position: absolute;
            }

            // IMMAGINE CIRCLE
            .rotate {
                width: 550px;
                height: 550px;
                animation: spin 10s linear infinite;


                @keyframes spin {
                    100% {
                        transform: rotate(360deg);
                    }
                }

            }

        }

        // RECIPIENTE ARTICOLO
        .article-prof-cyclist {
            width: 450px;


            // IMMAGINI CASCHI
            .image-helmet {
                height: 60px;
            }

            .image-frontal-helmet{
                height: 70px;
            }

        }  

    }

}


</style>