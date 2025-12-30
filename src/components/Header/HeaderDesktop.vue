<template>
<header class=" flex h-20 w-full relative z-[100] shadow-xl transition-colors duration-300"
:class="isDarkMode ? 'bg-[#e4b764]' :'bg-[#f8e889]'">
<div class=" w-1/2 flex items-center justify-center relative z-20 rounded-tr-[45xp]"
:class="isDarkMode ?'bg-neutral-950':'bg-neutral-100 border-r-2 b border-[#e4b764]'">
   <div class="text-4xl font-black tracking-tighter" :class="isDarkMode ? 'text-white ': 'text-black'">
    LOGO
</div> 
</div>
<div class="flex-1 flex flex-col ">

</div>


</header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>