<script setup lang="ts">
import { useInternalStore, type TTask } from '@/stores/internal/internal.store';


definePageMeta({
    layout:'internal'
});

const internalStore = useInternalStore();

const todoTasks:ComputedRef<TTask[]> = computed(() => internalStore.getTasksTodo);

const progressTasks:ComputedRef<TTask[]> = computed(() => internalStore.getTasksProgress);

const doneTasks:ComputedRef<TTask[]> = computed(() => internalStore.getTasksDone);

</script>

<template>
    <div class="flex flex-col gap-2">
        <!-- todo -->
        <LazyInternalHomeList :tasks="todoTasks" :status="'todo'"></LazyInternalHomeList>
        <!-- progress -->
        <LazyInternalHomeList :tasks="progressTasks" :status="'progress'"></LazyInternalHomeList>
        <!-- done -->
        <LazyInternalHomeList :tasks="doneTasks" :status="'done'"></LazyInternalHomeList>
    </div>
</template>