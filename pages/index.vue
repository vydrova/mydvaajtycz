<template>
    <main id="content">
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
        <Limitations />
        <Participation />
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
import Limitations from '~/components/content/Limitations.vue';
import Participation from '~/components/content/Participation.vue';

export default {
    components: { MainSlide, Intro, Place, Transport, DressCode, Gifts, Kids, Food, Accomodation, Gallery, Schedule, Limitations, Participation },
    mounted() {
        if (process.browser) {
            const section = document.querySelectorAll("section")
            const scrolledSections = []
            window.addEventListener("scroll", () => {
                section.forEach((item, index) => {
                    if (index < section.length - 1) {
                        if (window.scrollY >= (item.offsetTop - window.innerHeight/3) && window.scrollY < section[index + 1].offsetTop && !scrolledSections.includes(item.id)) {
                            const eventData = { id: item.id }
                            this.$gtm.push({ event: 'scrollToSection', eventData })
                            scrolledSections.push(item.id)
                        }
                    } else {
                        if (window.scrollY >= (item.offsetTop - window.innerHeight/3) && !scrolledSections.includes(item.id)) {
                            const eventData = { id: item.id }
                            this.$gtm.push({ event: 'scrollToSection', eventData })
                            scrolledSections.push(item.id)
                        }
                    }
                })
            })
        }
    }
}
</script>
