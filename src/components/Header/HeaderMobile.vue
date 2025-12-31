<template>
    <div class="w-full transition-colors duration-300">
        <div class=" flex h-[90px] shadow-lg relative z-[100]" :class="isDarkMode ? 'bg-[#1a1a1a]' : 'bg-white'">
            <!-- logo -->
            <div @click="visible = true"
                class=" flex-[1.2] flex items-center justify-center rounded-br-[45px] z-[20] border-r-2 cursor-pointer transition-colors"
                :class="isDarkMode
                    ? 'bg-neutral-950 border-[#E4B764]'
                    : 'bg-neutral-100 border-[#F8E889]'">
                <span class="text-2xl font-black tracking-tighter "
                    :class="isDarkMode ? 'text-white' : 'text-neutral-800'">
                    LOGO
                </span>
                
            </div>

            <!-- rigth header -->
            <div class="flex-[2] flex flex-col">
                <!-- top bar -->
                <div class=" flex-1 bg-gradient-to-r from-[#E4B764] to-[#F8E889] flex justify-end px-4 gap-3">
                    <div
                        class="w-9 h-9 bg-[#1a1a1a] text-[#E4B764] rounded-full flex items-center justify-center font-bold border-2 border-[#E4B764] text-sm">
                        Vn
                    </div>
                    <div class=" w-9 h-9 bg-[#1a1a1a] rounded-full flex flex-col justify-center items-center gap-[3px] border-2 border-[#E4B764] cursor-pointer"
                        @click="visible = true">
                        <div class="w-4 h-[2px] bg-[#E4B764]"></div>
                        <div class="w-4 h-[2px] bg-[#E4B764]"></div>
                        <div class="w-4 h-[2px] bg-[#E4B764]"></div>
                        <div class="w-4 h-[2px] bg-[#E4B764]"></div>
                    </div>
                </div>
                <!-- bottom bar -->
                <div class="flex-1 flex justify-between items-center px-4 transition-colors"
                    :class="isDarkMode ? 'bg-[#1a1a1a]' : 'bg-neutral-50'">
                    <div class=" flex gap-4 ml-4">
                        <i class="pi pi-video" :class="iconColor"></i>
                        <i class="pi pi-map-marker" :class="iconColor"></i>
                    </div>
                    <!-- dark mode switch -->
                    <!-- <div class="w-12 h-6 border rounded-full relative cursor-pointer " @click="isDarkMode = !isDarkMode"
                        :class="isDarkMode
                            ? 'bg-black border-[#E4B764]'
                            : 'bg-neutral-300 border-neutral-400'">
                        <div class="w-4.5 h-4.5 absolute top-0.5 transition-all duration-300 flex items-center justify-center rounded-full"
                            :class="isDarkMode ? 'left-6 bg-[#E4B764]' : 'left-1 bg-white'">
                            <i :class="isDarkMode
                                ? 'pi pi-moon text-[8px] text-black'
                                : 'pi pi-sun text-[8px] text-orange-500'
                                "></i>
                        </div>
                    </div> -->
                                        <div class="w-12 h-6 rounded-full cursor-pointer relative border border-[#e4b764]/50"
                        :class="isDarkMode ? 'bg-bg-neutral-900 ' : 'bg-white'" @click="isDarkMode = !isDarkMode">
                        <div class=" absolute top-0.5 w-4.5 h-4.5 rounded-full  transition-all flex items-center justify-center"
                            :class="isDarkMode ? 'left-1 bg-[#e4b764]' : ' left-6 bg-[#e4b764]'">
                            <i :class="isDarkMode ? 'pi pi-sun text-black ' : 'pi pi-sun text-black '"
                                class="text-[8px]"></i>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- sidebar -->
    <Sidebar v-model:visible="visible" position="left" :dismissable="true" :modal="true" :showCloseIcon="false" :pt="{
        root: {
            class: isDarkMode
                ? 'w-[300px] bg-[#1a1a1a] text-white border-r border-neutral-800'
                : 'w-[300px] bg-white text-neutral-800'
        },
        header: { class: 'hidden' },
        content: { class: 'p-0 h-full flex flex-col' },
        mask: { class: 'bg-black/60' }
    }">
        <div class="flex flex-col h-full">
            <!-- porfile -->
            <div class="p-6 " :class="isDarkMode ? 'bg-neutral-900' : 'bg-neutral-50'">
                <div class="flex items-center gap-4 ">
                    <img src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" alt=""
                        class="w-14 h-14 rounded-full border-2 border-[#E4B764]">
                    <div>
                        <div class="font-black ">dsfjksdhf</div>
                        <div class="text-xs text-[#E4B764] font-bold uppercase">
                            Account Center
                        </div>
                    </div>
                </div>
            </div>
            <!-- Menu -->
            <div class="flex-1 overflow-y-auto">
                <div v-for="item in navItems" :key="item.label" class="border-b"
                    :class="isDarkMode ? 'border-neutral-800' : 'border-neutral-100'">
                    <div @click="item.isDropdown && toggleItem(item.label)"
                        class="flex justify-between items-center p-4 cursor-pointer hover:bg-[#E4B764]/10">
                        <div class="flex gap-4 items-center font-bold text-sm">
                            <i :class="item.icon" class="text-[#E4B764]"></i>
                            {{ item.label }}
                        </div>
                        <i v-if="item.isDropdown" class="pi pi-chevron-down text-xs transition-transform"
                            :class="{ 'rotate-180': activeItem === item.label }"></i>
                    </div>
                    <transition name="menu-slide">
                        <div v-if="item.isDropdown && activeItem === item.label" class=" bg-black/5">
                            <div v-for="sub in item.items" :key="sub.label"
                                class="pl-14 py-3 text-xs font-bold uppercase opacity-80 hover:text-[#E4B764] cursor-pointer">
                                {{ sub.icon }} {{ sub.label }}
                            </div>
                        </div>
                    </transition>
                </div>
            </div>
            <!-- logout -->
            <div class=" p-4 border-t " :class="isDarkMode ? 'border-neutral-800' : 'border-neutral-100'">
                <button
                    class="w-full  py-3 rounded-xl bg-red-500/10 text-red-500 font-bold hover:bg-red-500 hover:text-white transition"
                    @click="visible = false">
                    <i class="pi pi-sign-out mr-2"></i>
                    logout

                </button>
            </div>

        </div>

    </Sidebar>
</template>

<script>
import { ref, computed, watch } from 'vue'
import Sidebar  from 'primevue/sidebar';
export default {
    components: {
        Sidebar,
    },
    setup() {
        const visible = ref(false)
        const isDarkMode = ref(true)
        const activeItem = ref(null)

        const toggleItem = (label) => {
            activeItem.value =
                activeItem.value === label ? null : label
        }
        const navItems = ref([
            {
                label: 'LIVE SCHEDULE',
                icon: 'pi pi-video',
                isDropdown: true,
                items: [
                    { label: 'FOOTBALL', icon: 'pi pi-football' },
                    { label: 'CASINO', icon: 'pi pi-wallet' }
                ]
            },
            {
                label: 'FIXTURES',
                icon: 'pi pi-calendar',
                isDropdown: true,
                items: [
                    { label: 'Premier League ', icon: "sdnfjk" },
                    { label: 'lalega', icon: 'sjfk' }
                ]
            },
            { label: 'ODD5', icon: 'pi pi-chart-line' },
            { label: 'ODD5', icon: 'pi pi-chart-line' },
            { label: 'ODD5', icon: 'pi pi-chart-line' },
            { label: 'ODD5', icon: 'pi pi-chart-line' },

        ])



        const iconColor = computed(() =>
            isDarkMode.value
                ? 'text-white text-lg'
                : 'text-neutral-600 text-lg'

        )
        watch(
            isDarkMode,
            (val) => {
                document.documentElement.classList.toggle('dark', val)
            },
            { immediate: true }

        )
        return {
            visible,
            isDarkMode,
            activeItem,
            toggleItem,
            navItems,
            iconColor
        }
    },
}
</script>


<style scoped>
.menu-slide-enter-active,
.menu-slide-leave-active {
    transition: max-height 0.3 ease, opacity 0.2 ease;
    overflow: hidden;
    max-height: 500px;
}

.menu-slide-enter-from,
.menu-slide-leave-to {
    max-height: 0;
    opacity: 0;
}

::-webkit-scrollbar {
    width: 4px;
}

::-webkit-scrollbar-thumb {
    background: #e4b764;
    border-radius: 10px;
}
</style>