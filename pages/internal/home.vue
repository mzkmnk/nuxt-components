<script setup lang="ts">

definePageMeta({
    layout:'internal'
});

const routerStore = useRouterStore();

onMounted(() => {
    console.log('path',routerStore.path);
});

</script>

<template>
    <div>
        <p>internal index.vue</p>
    </div>
</template>