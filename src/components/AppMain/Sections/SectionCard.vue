<script>

export default {
    name: 'SectionCard',
    props: {

        // Card generics
        hasBlackBorder: Boolean,    // Sezione typeProfessional
        hasSlimBorder: Boolean,     // Sezione events
        hasMilkBorder: Boolean,     // Sezione expertTrainers
        hasWhiteBorder: Boolean,    // Sezione specialPacks

        // Top card
        hasImg: Boolean,            // Sezioni typeProfessional, events, articles
        img: String,                // Sezioni typeProfessional, events, articles
        topTitle: String,           // Sezione typeProfessional
        topDateDay: String,         // Sezione events
        topDateMonth: String,       // Sezione events
        hasOverlay: Boolean,        // Sezione typeProfessional
        // Bottom card
        hasBottom: Boolean,         // Sezione events
        cardTitle: String,          // Sezione events
        cardDate: String,           // Sezione events
        cardLocation: String,       // Sezione events
        buttonText: String,         // Sezione articles

        // Bottom card black
        hasBlackBottom: Boolean,    // Sezione expertTrainers
        name: String,               // Sezione expertTrainers

        // No image cards
        packName: String,           // Sezione specialPacks
        isFlipCard: Boolean,        // Sezione specialPacks

        // Article cards
        articleTitle: String,       // Sezione articles
        articleText: String         // Sezione articles

    },
    computed: {
        imagePath() {
            const url = new URL(`../../../assets/img/${this.img}`, import.meta.url);
            return url.href;
        }
    }
}
</script>
<template>
    <div class="media-card"
        :class="{ 'card-border-black': hasBlackBorder, 'card-border-slim': hasSlimBorder, 'card-border-milk': hasMilkBorder, 'card-border-white': hasWhiteBorder }">
        <div class="top-card">
            <figure class="mb-0" v-if="hasImg">
                <img class="img-fluid" :src="imagePath" alt="una a caso">
                <figcaption v-if="hasWhiteBorder">
                    22.06.2022 - Bike
                </figcaption>
            </figure>
            <!-- For cards with button -->
            <div v-if="hasWhiteBorder" class="bottom-card-with-button">
                <h5>{{ articleTitle }}</h5>
                <p>{{ articleText }}</p>
                <BaseButton :hasArrow="false" :text="'More'" />
            </div>

            <!---------------  Flip card ------------>
            <div v-if="isFlipCard" class="flip-card">
                <div class="top-flip-card">
                    <h5>{{ packName }}</h5>
                    <span>Learn how to ride from professional</span>
                </div>
                <div class="bottom-flip-card">
                    <ul>
                        <li>
                            <FontAwesomeIcon icon="check" />
                            Phone Mountaineer bike training
                        </li>
                        <li>
                            <FontAwesomeIcon icon="check" />
                            Remote Excellent bike service
                        </li>
                        <li>
                            <FontAwesomeIcon icon="check" />
                            Onsite Safe cycling training
                        </li>
                        <li>
                            <FontAwesomeIcon icon="xmark" />
                            Saafety helmet on bike
                        </li>
                        <li>
                            <FontAwesomeIcon icon="xmark" />
                            Free bikes for children
                        </li>
                    </ul>
                </div>
            </div>
            <!-- --------- Fine flip card  ------------- -->


            <div v-if="hasOverlay" class="overlay"></div>
            <div v-if="topTitle" class="top-title">{{ topTitle }}</div>
            <div v-if="topDateDay" class="top-date">
                <div class="top-date-day">{{ topDateDay }}</div>
                <div class="top-date-month">{{ topDateMonth }}</div>
            </div>
        </div>
        <div v-if="hasBottom" class="bottom-card">
            <h5>{{ cardTitle }}</h5>
            <div class="date">
                <FontAwesomeIcon icon="fa-regular fa-clock" />
                {{ cardDate }}
            </div>
            <div class="location">
                <FontAwesomeIcon icon="location-dot" />
                {{ cardLocation }}
            </div>
            <span class="label">{{ buttonText }}</span>
        </div>
        <div v-if="hasBlackBottom" class="bottom-black">
            <h5>{{ name }}</h5>
            <span>Biker</span>
            <div class="brands">
                <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                <FontAwesomeIcon icon="fa-brands fa-square-instagram" />
                <FontAwesomeIcon icon="fa-brands fa-twitter" />
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../../../assets/scss/vars' as *;

.media-card {
    position: relative;

    // ------------     Card borders    -------------------
    &.card-border-black {
        border: 5px solid black;
    }

    &.card-border-slim {
        border: 1px solid grey;
    }

    &.card-border-milk {
        border: 10px solid $milk;
        border-radius: 5px;
    }

    &.card-border-white {
        border: 30px solid white;
        border-radius: 5px;
        box-shadow: 3px 3px 13px 0 rgba(0, 0, 0, 0.096);
    }

    // -----------------------------------------------------

    // Card with img
    .top-card {
        height: 100%;
        position: relative;

        // Sezione typeProfessional
        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.432);
        }

        img {
            width: 100%;
        }

        // Sezione articles
        figcaption {
            font-weight: bold;
            font-size: 0.9rem;
            text-align: center;
        }

        // Sezione typeProfessional
        .top-title {
            position: absolute;
            top: 20px;
            left: 20px;
            color: white;
            font-size: 2rem;
        }


        // Sezione events
        .top-date {
            background-color: white;
            position: absolute;
            top: 10px;
            left: 10px;
            border-radius: 5px;
            width: 60px;
            height: 60px;

            text-align: center;
        }

        // Sezione events
        .top-date-day {
            font-size: 1.2rem;
            font-weight: bold;
        }
    }

    //-------------- Flip card (no img)---------------------
    .flip-card {
        box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);

        .top-flip-card {
            position: relative;
            background-color: black;
            color: white;
            text-align: center;
            padding: 20px;
            margin-bottom: 80px;

            &::after {
                content: '';
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                height: 70px;
                background-image: linear-gradient(173deg, black 49%, white 50%);

            }
        }

        .bottom-flip-card {
            padding-bottom: 20px;

            ul {
                list-style-type: none;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                row-gap: 1rem;

                >li {
                    border-bottom: 1px solid lightgrey;
                    padding-bottom: 10px;
                    width: 80%;
                }

                >li:last-child {
                    border-bottom: 0;
                }
            }
        }

    }

    //--------  Fine flip card        --------------------

    // Sezione events
    .bottom-card {

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 7px;
        padding: 10px;

        .label {
            background-color: $light-grey;
            padding: 3px 7px;
        }
    }

    // Sezione expertTrainers
    .bottom-black {
        padding: 20px 0;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: calc(100% / 3);
        background-color: black;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        .brands {
            display: flex;
            column-gap: 10px;
            font-size: 1rem;
        }
    }

    // Sezione articles
    .bottom-card-with-button {
        padding-top: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        height: 220px;

        p {
            min-height: 73px;
        }
    }

}
</style>