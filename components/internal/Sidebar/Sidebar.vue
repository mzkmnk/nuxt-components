<script setup lang="ts">
import { useInternalStore } from '@/stores/internal/internal.store';
import type { TNavigatePath } from '@/stores/router.store';

type TSidebarItem = {
    icon: string;
    title:string;
    path: TNavigatePath;
    dev:boolean,
}

const sidebarItems:TSidebarItem[] = [
    {
        icon: 'pi pi-table',
        title: 'home',
        path: '/internal/home',
        dev:false
    },
    {
        icon: 'pi pi-inbox',
        title:'inbox',
        path: '/internal/inbox',
        dev:true
    },
    {
        icon: 'pi pi-map',
        title:'roadmap',
        path: '/internal/roadmap',
        dev:true
    }
];

const routerStore = useRouterStore();

const path = computed(() => routerStore.$state.path);

const onClickSidebarItem = (path:TNavigatePath):void => {
    routerStore.navigate(path);
};

</script>

<template>
    <div class="h-screen w-80 flex flex-col py-2 px-4 bg-slate-100 gap-3">
        <div
            class="px-4 py-2 rounded-xl flex flex-row gap-2 items-center justify-between hover:bg-slate-300"
            v-for="(sidebarItem,index) of sidebarItems"
            v-on:click="onClickSidebarItem(sidebarItem.path)"
            :class="{'bg-slate-300': sidebarItem.path === path}"
            :key="index"
        >
            <div class="flex flex-row gap-2 items-center">
                <i class="text-slate-600 text-xl" :class="sidebarItem.icon"></i>
                <p class="font-light text-lg text-slate-700">{{ sidebarItem.title }}</p>
            </div>
            <div v-if="sidebarItem.dev">
                <Tag severity="info" value="Comming soon"></Tag>
            </div>
        </div>
    </div>
</template>