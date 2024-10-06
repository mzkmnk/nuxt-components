<template>
    <div class="flex flex-row bg-slate-100 h-screen">
        <div>
            <LazyInternalSidebar></LazyInternalSidebar>
        </div>
        <div class="w-full flex items-center">
            <div class="h-[97%] bg-white w-[99%] rounded-3xl p-3 overflow-y-auto">
                <NuxtPage />
            </div>
        </div>
    </div>
</template>