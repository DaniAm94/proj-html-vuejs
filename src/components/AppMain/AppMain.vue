<script>
import MainJumbotron from './MainJumbotron.vue';
import ProfessionalSection from './Sections/ProfessionalSection.vue';
import TypeProfessionalSection from './Sections/TypeProfessionalSection.vue';
import EventsSection from './Sections/EventsSection.vue';
import ExpertTrainersSection from './Sections/ExpertTrainersSection.vue';
import SpecialPacksSection from './Sections/SpecialPacksSection.vue';
import ArticlesSection from './Sections/ArticlesSection.vue';

export default {
    name: 'AppMain',
    components: {
        MainJumbotron,
        ProfessionalSection,
        TypeProfessionalSection,
        EventsSection,
        ExpertTrainersSection,
        SpecialPacksSection,
        ArticlesSection,
    }

}
</script>
<template>
    <main>
        <h1>prova</h1>
        <MainJumbotron />
        <ProfessionalSection />
        <TypeProfessionalSection />
        <EventsSection />
        <ExpertTrainersSection />
        <SpecialPacksSection />
        <ArticlesSection />
    </main>
</template>
<style></style>