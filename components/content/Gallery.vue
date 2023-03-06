<template>
    <section id="galerie">
        <div class="gallery row">
            <div class="col-md-4" v-for="img in data" :key="img.src">
                <img class="lazyload" :data-src="img.src" :title="img.title">
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
                    src: '/img/galerie/2016_blansko_670.jpeg',
                    title: 'Blansko 2016'
                },
                {
                    src: '/img/galerie/2017_svycarsko_670.jpeg',
                    title: 'České Švýcarsko 2017'
                },
                {
                    src: '/img/galerie/2019_jentak_670.jpg',
                    title: '2019 jen tak'
                },
                {
                    src: '/img/galerie/2019_viden_670.jpg',
                    title: 'Vídeň 2019'
                },
                {
                    src: '/img/galerie/2019_kochofen_670.jpeg',
                    title: 'Kochofen 2019'
                },
                {
                    src: '/img/galerie/2019_vanocnividen_670.jpg',
                    title: 'Vánoční Vídeň 2019'
                },
                {
                    src: '/img/galerie/2020_babilom_670.jpg',
                    title: 'Babí lom 2020'
                },
                {
                    src: '/img/galerie/2020_klinovec_670.jpg',
                    title: 'Klínovec 2020'
                },
                {
                    src: '/img/galerie/2021_polabi_670.jpeg',
                    title: 'Polabí 2021'
                },
                {
                    src: '/img/galerie/2021_vanoce1_670.jpeg',
                    title: 'Vánoce 2021'
                },
                {
                    src: '/img/galerie/2022_hustopece2_670.jpg',
                    title: 'Hustopeče 2022'
                },
                {
                    src: '/img/galerie/2022_lhota_670.jpeg',
                    title: 'Červená lhota 2022'
                },
                {
                    src: '/img/galerie/2022_sloup_670.jpg',
                    title: 'Sloup 2022'
                },
                {
                    src: '/img/galerie/2022_svatbaVerca_670.jpeg',
                    title: 'Svatba 2022'
                },
                {
                    src: '/img/galerie/2022_svatosske_670.jpg',
                    title: 'Svatošské skály 2022'
                },
                {
                    src: '/img/galerie/2022_zasnuby_670.jpeg',
                    title: 'Zásnuby 2022'
                },
                {
                    src: '/img/galerie/2022_snezka1_670.jpeg',
                    title: 'Sněžka 2022'
                },
                {
                    src: '/img/galerie/2022_hradek_670.jpeg',
                    title: 'Hrádek u Nechanic 2022'
                }
            ]
        }
    }
}
</script>