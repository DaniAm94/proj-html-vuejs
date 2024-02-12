<script>
import MainJumbotron from './MainJumbotron';
import ProfessionalSection from './Sections/ProfessionalSection';
import TypeProfessionalSection from './Sections/TypeProfessionalSection';
import EventsSection from './Sections/EventsSection';
import ExpertTrainersSection from './Sections/ExpertTrainersSection';
import SpecialPacksSection from './Sections/SpecialPacksSection';
import ArticlesSection from './Sections/ArticlesSection';

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
    <MainJumbotron />
    <ProfessionalSection />
    <TypeProfessionalSection />
    <EventsSection />
    <ExpertTrainersSection />
    <SpecialPacksSection />
    <ArticlesSection />
</template>
<style></style>