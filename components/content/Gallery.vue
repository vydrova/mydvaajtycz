<template>
    <section id="galerie">
        <div class="gallery row">
            <div class="col-md-4" v-for="img in data" :key="img.src">
                <img class="lazyload" :data-src="img.src">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            data: [
                {
                    src: '/img/galerie/2016_blansko.jpeg',
                    title: 'Blansko 2016'
                },
                {
                    src: '/img/galerie/2017_svycarsko.jpeg',
                    title: 'České Švýcarsko 2017'
                },
                {
                    src: '/img/galerie/2019_jentak.jpg',
                    title: '2019 jen tak'
                },
                {
                    src: '/img/galerie/2019_viden.jpg',
                    title: 'Vídeň 2019'
                },
                {
                    src: '/img/galerie/2019_kochofen.jpeg',
                    title: 'Kochofen 2019'
                },
                {
                    src: '/img/galerie/2019_vanocnividen.jpg',
                    title: 'Vánoční Vídeň 2019'
                },
                {
                    src: '/img/galerie/2020_babilom.jpg',
                    title: 'Babí lom 2020'
                },
                {
                    src: '/img/galerie/2020_klinovec.jpg',
                    title: 'Klínovec 2020'
                },
                {
                    src: '/img/galerie/2021_polabi.jpeg',
                    title: 'Polabí 2021'
                },
                {
                    src: '/img/galerie/2021_vanoce1.jpeg',
                    title: 'Vánoce 2021'
                },
                {
                    src: '/img/galerie/2022_hustopece2.jpg',
                    title: 'Hustopeče 2022'
                },
                {
                    src: '/img/galerie/2022_lhota.jpeg',
                    title: 'Červená lhota 2022'
                },
                {
                    src: '/img/galerie/2022_sloup.jpg',
                    title: 'Sloup 2022'
                },
                {
                    src: '/img/galerie/2022_svatbaVerca.jpeg',
                    title: 'Svatba 2022'
                },
                {
                    src: '/img/galerie/2022_svatosske.jpg',
                    title: 'Svatošské skály 2022'
                },
                {
                    src: '/img/galerie/2022_zasnuby.jpeg',
                    title: 'Zásnuby 2022'
                },
                {
                    src: '/img/galerie/2022_snezka1.jpeg',
                    title: 'Sněžka 2022'
                },
                {
                    src: '/img/galerie/2022_hradek.jpeg',
                    title: 'Hrádek u Nechanic 2022'
                }
            ]
        }
    }
}
</script>