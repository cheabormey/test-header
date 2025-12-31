<template>
    <header class=" flex h-20 w-full relative z-[100] shadow-xl transition-colors duration-300"
        :class="isDarkMode ? 'bg-[#e4b764]' : 'bg-[#f8e889]'">
        <div class=" w-1/5 flex items-center justify-center relative z-20 rounded-tr-[45px]"
            :class="isDarkMode ? 'bg-neutral-950' : 'bg-neutral-100 border-r-2 border-[#e4b764]'">
            <div class="text-4xl font-black tracking-tighter" :class="isDarkMode ? 'text-white ' : 'text-black'">
                LOGO
            </div>
        </div>
        <div class="flex-1 flex flex-col ">
            <div class="flex-[1.2] flex items-center justify-between px-6"
                :class="isDarkMode ? 'bg-[#e4b774]' : 'bg-[#f8e889]'">
                <nav>
                    <ul class="flex list-none gap-2 m-0 h-full ">
                        <li v-for="item in navItems" :key="item.label"
                            class="group relative px-4 h-10 flex items-center cursor-pointer transition-all rounded-full"
                            :class="{ 'bg-black border-neutral-500 border-2  text-[#e4b774]': activeDropdown === item.label }"
                            @click.stop="toggleDropdown(item.label)">
                            <span class=" font-bold text-[12px] uppercase flex items-center gap-1"
                                :class="activeDropdown === item.label ? 'text-white' : 'text-black'">
                                {{ item.label }}

                            </span>
                            <Transition enter-active-class=" transition duration-200 ease-out"
                                enter-from-class=" opacity-0 translate-y-2" enter-to-class=" opacity-100 translate-y-0"
                                leave-active-class="transition duration-150 ease-in"
                                leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-2"
                                class="bg-white">
                                <div v-if="item.isDropdown && activeDropdown === item.label"
                                    class=" absolute top-[120%] left-0 w-[200px]  bg-white/50 backdrop-blur-md rounded-[20px] p-4 shadow-2xl z-[500] border border-gray-300">
                                    <div class=" flex flex-col gap-2 ">
                                        <div v-for="sub in item.items" :key="sub.label"
                                            class="flex  items-center gap-4 bg-black/5   backdrop-blur-md rounded-[20px] px-4 py-2 border border-gray-300/20 hover:bg-black/10 transition-all cursor-pointer">
                                            
                                                <i :class="sub.icon" class=" text-lg text-[#e4b764]"></i>

                                           
                                            <span class=" text-black font-bold text-sm ">{{ sub.label }}</span>
                                        </div>
                                    </div>

                                </div>
                            </Transition>

                        </li>
                    </ul>
                </nav>
                <div class="flex  items-center gag-3">
                    <template v-if="!isLoggedIn">
                        <button
                            class="px-4 py-1.5 rounded-full text-[11px] font-black transition-transform active:scale-95 bg-white text-black border-2 border-[#e4b764] shadow-md"
                            @click="isLoggedIn = true">Register</button>
                        <button
                            class="px-4 py-1.5 rounded-full text-[11px] font-black transition-transform active:scale-95 bg-black border-[#e4b764] border-2 text-[#e4b764]"
                            @click="isLoggedIn = true">login</button>

                    </template>
                    <template v-else>
                        <div
                            class=" flex items-center gap-4 bg-black/90 rounded-full px-4 py-1 border border-[#e4b764]/30 shadow-lg">
                            <div class=" relative">
                                <div @click="toggleWallet"
                                    class="bg-white rounded-full px-2 py-1 flex items-center gap-3 cursor-pointer shadow-md min-w-[140px] justify-between">
                                    <div
                                        class="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden bg-neutral-100">
                                        <i class="pi pi-dollar text-[#e4b764]"></i>
                                    </div>
                                    <span class="font-extrabold text-black text-lg flex-1 ">1,000</span>
                                    <div
                                        class="w-7 h-7 bg-[#e4b764] rounded-full flex items-center justify-center text-black">
                                        <i class=" pi pi-plus text-[120px] font-bold"></i>
                                    </div>
                                </div>
                                <transition enter-active-class=" transition duration-300 ease-out"
                                    enter-from-class="opacity-0 -translate-y-4 scale-95"
                                    enter-to-class="opacity-100 translate-y-0 scale-100">
                                    <div v-if="isWalletOpen"
                                        class=" absolute top-[120%] left-0 w-[200px] bg-neutral-500/60 backdrop-blur-md rounded-[30px] p-4 shadow-2xl z-[500] border border-white/20">
                                        <div class=" flex flex-col gap-3 ">
                                            <div
                                                class="flex  items-center gap-4 bg-black/5 rounded-full px-4 py-2 border border-white/10 hover:bg-black/60 transition-all cursor-pointer">
                                                <div
                                                    class=" w-7 h-7 rounded-full border border-white/20 flex items-center justify-center text-white text-xl bg-gradient-to-b from-gray-300 to-gray-500">
                                                    <i class="pi pi-prime"></i>

                                                </div>
                                                <span class=" text-white font-bold text-sm ">20.000</span>
                                            </div>
                                            <div
                                                class="flex  items-center gap-4 bg-black/5 rounded-full px-4 py-2 border border-white/10 hover:bg-black/60 transition-all cursor-pointer">
                                                <div
                                                    class=" w-7 h-7 rounded-full border border-white/20 flex items-center justify-center text-white text-xl bg-gradient-to-b from-gray-300 to-gray-700">
                                                    <i class="pi pi-crown"></i>

                                                </div>
                                                <span class=" text-white font-bold text-sm ">20.000</span>
                                            </div>
                                            <div class="mt-4 flex justify-center gap-4 border-t border-white/10 pt-2">
                                                <button
                                                    class="flex items-center gap-2 text-white font-medium hover:opacity-80 transition-opacity">
                                                    <div
                                                        class="w-7 h-7 bg-[#e4b764] rounded-full flex items-center justify-center text-black">
                                                        <i class=" pi pi-plus text-[10px] font-bold"></i>
                                                    </div>
                                                    <span class="text-sm ">English</span>

                                                </button>

                                            </div>

                                        </div>
                                    </div>
                                </transition>

                            </div>
                            <div class=" flex gap-4 text-[#e4b764]">
                                <div class="relative cursor-pointer">
                                    <i class=" pi pi-bell text-lg "></i>
                                    <span
                                        class=" absolute -top-2 -right-2 bg-red-600 text-white text-[9px] rounded-full w-4 h-4 flex items-center justify-center border border-black font-bold shadow-sm">10</span>

                                </div>
                                <div class="relative cursor-pointer">
                                    <i class=" pi pi-envelope text-lg "></i>
                                    <span
                                        class=" absolute -top-2 -right-2 bg-red-600 text-white text-[9px] rounded-full w-4 h-4 flex items-center justify-center border border-black font-bold shadow-sm">10</span>
                                </div>
                                <div class="relative cursor-pointer">
                                    <i class=" pi pi-calendar text-lg "></i>
                                    <span
                                        class=" absolute -bottom-1 -right-2 bg-red-600 text-white text-[9px] rounded-full w-4 h-4 flex items-center justify-center border border-black font-bold shadow-sm">1</span>
                                </div>

                            </div>
                            <div class=" relative">
                                <div class="flex items-center gap-2 cursor-pointer group " @click.stop="toggleAccount">
                                    <span class="text-white text-[10px] opacity-70 hidden md:inline"> Bor Mey</span>
                                    <div class=" relative">
                                        <img src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
                                            alt=""
                                            class=" w-9 h-9 rounded-full border-2 border-[#eb764] bg-white p-0.5">
                                        <span
                                            class=" absolute -bottom-1 -right-1 bg-[#4a3721] text-[#e4b764] text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center border border-[#e4b764]">20</span>
                                    </div>

                                </div>
                                <Transition enter-active-class=" transition duration-300 ease-out"
                                    enter-from-class=" opacity-0 -translate-y-2"
                                    enter-to-class="opacity-100 translate-y-0">
                                    <div v-if="isAccountOpen"
                                        class="absolute top-[140%] right-0 w-72 bg-white/50 backdrop-blur-md rounded-[20px] shadow-2xl border overflow-hidden z-[500]">
                                        <div class="bg-white ">

                                        </div>
                                        <div
                                            class="bg-gradient-to-b from-neutral-800 to-black text-[#e4b764] p-4 flex items-center justify-center gap-3 font-bold text-sm tracking-widest ">
                                            <i class="pi pi-user text-xl "></i> love

                                        </div>
                                        <div class=" flex flex-col">
                                            <button
                                                class="flex items-center gap-5 px-8 py-4 font-bold text-gray-700 bg-black/5   backdrop-blur-md hover:bg-gray-100 transition-colors text-xs text-left w-full   "><i
                                                    class="pi pi-home text-xl text-black w-6 text-center"></i>PROFILE</button>
                                            <button
                                                class="flex items-center gap-5 px-8 py-4 font-bold text-gray-700 bg-black/5   backdrop-blur-md hover:bg-gray-100 transition-colors text-xs text-left w-full   "><i
                                                    class="pi pi-check-circle text-xl text-gray-black w-6 text-center"></i>TASKS</button>

                                            <button
                                                class="flex items-center gap-5 px-8 py-4 font-bold text-gray-700 bg-black/5   backdrop-blur-md hover:bg-gray-100 transition-colors text-xs text-left w-full   "><i
                                                    class="pi pi-wallet text-xl text-black w-6 text-center"></i>YUR
                                                WALLET</button>
                                            <button
                                                class="flex items-center gap-5 px-8 py-4 font-bold text-gray-700 bg-black/5   backdrop-blur-md hover:bg-gray-100 transition-colors text-xs text-left w-full   "><i
                                                    class="pi pi-chart-line text-xl text-black w-6 text-center "></i>TRANACTION
                                                HISTORY</button>

                                            <button
                                                class="fflex items-center gap-5 px-8 py-4 font-bold text-gray-700 bg-black/5   backdrop-blur-md hover:bg-gray-100 transition-colors text-xs text-left w-full  "
                                                @click="logout"><i
                                                    class=" pi pi-sign-out text-xl text-black w-6 text-center"></i>
                                                login</button>


                                        </div>

                                    </div>

                                </Transition>

                            </div>

                        </div>

                    </template>

                </div>

            </div>
            <div class=" flex-1 flex items-center justify-between px-6"
                :class="isDarkMode ? 'bg-neutral-950' : 'bg-neutral-100'">
                <div class="flex gap-6">
                    <a v-for="item in subNavItems" :key="item.label"
                        class="text-[11px] font-bold flex items-center gap-2 cursor-pointer no-underline"
                        :class="isDarkMode ? 'text-[#e4b764]' : 'text-neutral-600'">
                        <i :class="item.icon"></i>
                        {{ item.label }}
                    </a>

                </div>
                <div class="flex gap-4">
                    <button
                        class=" flex items-center gap-2 px-3 py-1 text-[10px] font-black rounded-full border border-[#e4b764] bg-neutral-900 text-white"
                        @click="">
                        <i class="pi pi-globe text-[10px]"></i>
                        English
                    </button>
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


    </header>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
export default {
    setup() {
        const isDarkMode = ref(true)
        const isLoggedIn = ref(true)
        const activeDropdown = ref(null)
        const isWalletOpen = ref(false)
        const isAccountOpen = ref(false)

        const toggleDropdown = (label) => {
            activeDropdown.value =
                activeDropdown.value === label ? null : label
        }
        const toggleWallet = () => {
            isWalletOpen.value = !isWalletOpen.value
            isAccountOpen.value = false
        }
        const toggleAccount = () => {
            isAccountOpen.value = !isAccountOpen.value
            isWalletOpen.value = false
        }
        const logout = () => {
            isLoggedIn.value = false
            isWalletOpen.value = false
            isAccountOpen.value = false
        }
        const navItems = [
            {
                label: "Live schedule",
                isDropdown: true,
                items: [
                    { label: 'FOOTBALL', icon: ' pi pi-football' },
                    { label: 'HORSE', icon: 'pi pi-flag' },
                    { label: 'E-SORTS', icon: 'pi pi-desktop' },
                    { label: 'CASINO', icon: 'pi pi-wallet' },
                ]
            },
                        {
                label: "Fixturse",
                isDropdown: true,
                items: [
                    { label: 'FOOTBALL', icon: ' pi pi-football' },
                    { label: 'HORSE', icon: 'pi pi-flag' },
                    { label: 'E-SORTS', icon: 'pi pi-desktop' },
                    { label: 'CASINO', icon: 'pi pi-wallet' },
                ]
                
            },
                              {
                label: "RESULTS",
                isDropdown: true,
                items: [
                    { label: 'FOOTBALL', icon: ' pi pi-football' },
                    { label: 'HORSE', icon: 'pi pi-flag' },
                    { label: 'E-SORTS', icon: 'pi pi-desktop' },
                    { label: 'CASINO', icon: 'pi pi-wallet' },
                ]
                
            },
            // {
            //     label: 'Fixturse',
            //     isDropdown: true,
            //     items: [
            //         { label: 'Premier league', icon: 'd' }
            //     ]

            // },
            { label: 'ODDS' },
            // { label: 'RESULTS' },
            { label: 'CHAT ROOM' },
            { label: 'NEWS' }
        ]
        const subNavItems = [
            { label: 'Newsfeed', icon: 'pi pi-list' },
            { label: 'Reels', icon: 'pi pi-video' },
            { label: 'Highlights', icon: 'pi pi-th-large' },
            { label: 'Slots ', icon: 'pi pi-wallet' }
        ]
        const handleClickOutside = (e) => {
            if (!e.target.closest('.group')) {
                activeDropdown.value = null
            }
            if (!e.target.closest('.relative')) {
                isWalletOpen.value = false
                isAccountOpen.value = false
            }
        }
        onMounted(() => {
            window.addEventListener('click', handleClickOutside)
        })
        onUnmounted(() => {
            window.removeEventListener('click', handleClickOutside)
        })
        return {
            isDarkMode,
            isLoggedIn,
            activeDropdown,
            isWalletOpen,
            isAccountOpen,
            toggleDropdown,
            toggleWallet,
            toggleAccount,
            logout,
            navItems,
            subNavItems,

        }
    }

}
</script>

<style lang="scss" scoped></style>