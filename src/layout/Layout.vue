<template>
    <div class="flex flex-col min-h-screen">
        <!-- desktop Header -->
        <div>
            <HeaderDesktop />
        </div>
        <!-- Mobile Header -->
        <div class="block lg:hidden">
            <HeaderMobile />
        </div>
        <!-- main content -->
        <main class="flex-1">
            <RouterView />
        </main>
    </div>
</template>

<script>
import HeaderDesktop from '@/components/Header/HeaderDesktop.vue';
import HeaderMobile from '@/components/Header/HeaderMobile.vue';
import { RouterView } from 'vue-router';
export default {
    components: {
        HeaderDesktop,
        HeaderMobile

    }

}
</script>

<style lang="scss" scoped></style>