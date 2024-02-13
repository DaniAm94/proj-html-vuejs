<script>

import SectionCard from './SectionCard.vue';

import { events } from '../../../assets/data';

export default {
    name: 'EventsSection',
    data: () => ({
        events,
        titleSection: "Don't Miss Our Events!",
        subtitle:"Get the amazing cycling experience."
        
    }),
    components: { SectionCard },
}
</script>


<template>
    <section>
        <div class="text-center">
            <h2>{{ titleSection }}</h2>
            <h6>{{ subtitle }}</h6>
        </div>
        <div class="container">
            <div class="h4">Events</div>
            <div class="row row-cols-3 row-gap-3" >
                <div v-for="event in events" class="col">
                    <SectionCard :hasImg="true" :img="event.img" :topDateDay="event.date" :hasBottom="true" :buttonText="event.type" :cardTitle="event.title" :cardDate="event.time" :hasSlimBorder="true" :cardLocation="event.place" />
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped lang="scss">
.container {
    display: flex;
    flex-direction: column;

}

</style>