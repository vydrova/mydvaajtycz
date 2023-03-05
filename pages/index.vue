<template>
    <main>
        <MainSlide />
        <Intro />
        <Place />
        <Transport />
        <Accomodation />
        <DressCode />
        <Food />
        <Schedule />
        <Gifts />
        <Kids />
        <Gallery />
    </main>
</template>

<script>
import Intro from '~/components/content/Intro.vue';
import MainSlide from '~/components/content/MainSlide.vue';
import Place from '~/components/content/Place.vue';
import Transport from '~/components/content/Transport.vue';
import DressCode from '~/components/content/DressCode.vue';
import Gifts from '~/components/content/Gifts.vue';
import Kids from '~/components/content/Kids.vue';
import Food from '~/components/content/Food.vue';
import Accomodation from '~/components/content/Accomodation.vue';
import Gallery from '~/components/content/Gallery.vue';
import Schedule from '~/components/content/Schedule.vue';

export default {
    components: { MainSlide, Intro, Place, Transport, DressCode, Gifts, Kids, Food, Accomodation, Gallery, Schedule },
}
</script>
