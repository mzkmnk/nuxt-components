<script setup lang="ts">
import type { TTask } from '@/stores/internal/internal.store';

const drawerModel = defineModel<{visible:boolean,task:TTask|undefined}>();
</script>
<template>
    <Drawer v-model:visible="modelValue?.visible" header="Drawer" class="!w-full md:!w-80 lg:!w-[30rem]">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </Drawer>
</template>