<template>
    <header>
        <div class="container">
            <nav class="click-dropdown">
                <NuxtLink to="/#" class="navbar-brand" title="Domů"><img src="/img/logo/mydvaajtyLogo.png" alt="Domů" width="80"></NuxtLink>
                
                <button class="my-navbar-toggler toggler-menu open-drop" ref="menuOpen" @click="open = !open" type="button" aria-label="Menu">
                    <div class="navbar-title">Menu</div>
                    <div class="navbar-hamburger">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </button>
                
                <div class="click-dropdown-content navbar-expand" ref="menuDropContent" :class="[open? 'open' : '']">
                    <ul>
                        <li @click="open = false; sentGtm('misto-a-cas')">
                            <nuxt-link to="#misto-a-cas">Místo a čas obřadu</nuxt-link>
                        </li>
                        <li @click="open = false; sentGtm('doprava')">
                            <nuxt-link to="#doprava">Doprava</nuxt-link>
                        </li>
                        <li @click="open = false; sentGtm('ubytovani')">
                            <nuxt-link to="#ubytovani">Ubytování</nuxt-link>
                        </li>
                        <li @click="open = false; sentGtm('co-na-sebe')">
                            <nuxt-link to="#co-na-sebe">Co na sebe</nuxt-link>
                        </li>
                        <li @click="open = false; sentGtm('jidlo-a-piti')">
                            <nuxt-link to="#jidlo-a-piti">Jídlo a pití</nuxt-link>
                        </li>
                        <li @click="open = false; sentGtm('harmonogram')">
                            <nuxt-link to="#harmonogram">Harmonogram</nuxt-link>
                        </li>
                        <li @click="open = false; sentGtm('dary')">
                            <nuxt-link to="#dary">Dary</nuxt-link>
                        </li>
                        <li @click="open = false; sentGtm('deti')">
                            <nuxt-link to="#deti">Děti</nuxt-link>
                        </li>
                        <li @click="open = false; sentGtm('omezeni')">
                            <nuxt-link to="#omezeni">Omezení</nuxt-link>
                        </li>
                        <li @click="open = false; sentGtm('ucast')">
                            <nuxt-link to="#ucast">Účast</nuxt-link>
                        </li>
                    </ul>
                </div>
                
            </nav>            
        </div>
    </header>
</template>

<script>
export default {  
    props: ['data', 'availableLocales'],
    data() {
        return {
            open: false
        }
    },
    methods: {
        sentGtm(id) {
            const eventData = {id: id}
            this.$gtm.push({ event: 'clickMenuLink', eventData })
        }
    },
    mounted() {
        if (process.browser) {
            window.addEventListener("click", (event) => {
                let menuDropContent = this.$refs.menuDropContent;
                let menuOpen = this.$refs.menuOpen;
                if(!event.composedPath().includes(menuDropContent) && !event.composedPath().includes(menuOpen) && this.open) {
                    this.open = false
                }
            })
        }
    }
}
</script>
