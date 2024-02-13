<script>

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
    <section id="professional" v-for="(professional, i) in professionalData" :key="i">
        <div class="container">
            <figure>
                <img class="rotate" src="../../../assets/img/bike-circle.png" alt="">
                <img src="../../../assets/img/bike-player.png" alt="">
            </figure>
            <div class="recipe-prof-cyclist">
                <article>
                    <h1 class="mb-3 fs-2">{{ professional.title }}</h1>
                    <p>{{ professional.p }}</p>
                </article>
                <img src="../../../assets/img/divider.jpg" alt="">
                <div class="mt-3">
                    <h2 class="fs-5">{{ profTeam }}</h2>
                    <p>{{ textTeam }}</p>
                </div>
                <div>
                    <h2 class="fs-5">{{ profTrainings }}</h2>
                    <p>{{ textTraining }}</p>
                </div>
                <BaseButton text="Get to know us" :hasArrow="true" />
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
#professional {
    margin: 150px 0px;


    .container {
        display: flex;
        align-items: center;
        justify-content: space-around;

    }

    figure {
        height: 550px;
        width: 550px;
        background-repeat: no-repeat;
        background-size: contain;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;


        img {
            height: 750px;
            position: absolute;
        }

        .rotate {
            width: 500px;
            height: 500px;
            animation: spin 1s linear infinite;
        }



        @keyframes spin {
            0% {
            transform: rotate(1turn);
            }
        }
    }

}

    .recipe-prof-cyclist {
        width: 450px;
    }



</style>