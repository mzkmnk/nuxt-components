<script setup lang="ts">
import { useInternalStore, type TStatus, type TTask } from '@/stores/internal/internal.store';
import { addDays, format } from 'date-fns';

export type TListProps = {
    tasks:TTask[];
    status:TStatus
};

const props = defineProps<TListProps>();

const internalStore = useInternalStore();

const isOpen:ComputedRef<boolean> = computed(() => internalStore.status[props.status].isOpen);

const addtionTask:ComputedRef<TTask|undefined> = computed(() => internalStore.status[props.status].task);

const icon:ComputedRef<string> = computed(():string => isOpen.value ? 'pi pi-angle-down':'pi pi-angle-up');


const toggleOpen = ():void => {
    internalStore.toggleStatusOpen(props.status);
}

const onClickAddtionTask = ():void => {
    internalStore.provisionalTask(props.status);
}

const onClickAddTask = ():void => {
    if(addtionTask.value){
        internalStore.addTask(addtionTask.value,props.status);  
    }
}

const onClickDeleteProvisinalTask = ():void => {
    internalStore.deleteProvisionalTask(props.status);
}

</script>

<template>
    <div>
        <div class="grid grid-cols-24">
            <div class="flex items-center col-start-1 col-end-2">
                <Button :icon="icon" text rounded severity="secondary" @click="toggleOpen()"></Button>
            </div>
            <div class="col-start-2 col-end-25">
                <div
                    class="w-full p-3 rounded-xl flex flex-row items-center justify-between gap-2 min-h-16"
                    :class="[props.status === 'todo' ? 'bg-slate-200': props.status==='progress' ? 'bg-indigo-100': 'bg-sky-100']"
                >
                     <div class="flex flex-row items-center gap-3">
                        <div class="rounded-full bg-white w-6 h-6 flex items-center justify-center shadow-sm border-slate-500">
                            <div
                                class="rounded-full w-2 h-2"
                                :class="[props.status === 'todo' ? 'bg-slate-700': props.status==='progress' ? 'bg-indigo-700': 'bg-sky-700']"
                                >
                            </div>
                        </div>
                        <p
                            class="text-xl"
                            :class="[props.status === 'todo' ? 'text-slate-900': props.status==='progress' ? 'text-indigo-800': 'text-sky-900']"
                        >{{ props.status }}</p>
                        <p class="text-slate-400">{{ props.tasks.length }}</p>
                    </div>
                    <Button icon="pi pi-plus" text rounded severity="secondary" v-if="addtionTask === undefined && isOpen" @click="onClickAddtionTask()"></Button>
                </div>
            </div>
        </div>
        <div v-if="isOpen">
            <div class="flex items-center grid grid-cols-24 h-14">
                <div class="col-start-2 col-end-8">
                    <p class="text-slate-600">Name</p>
                </div>
                <div class="col-start-9 col-end-13">
                    <p class="text-slate-600">StartDate</p>
                </div>
                <div class="col-start-14 col-end-18">
                    <p class="text-slate-600">DueDate</p>
                </div>
            </div>
            <Divider class="custom-divider" primevue-custom-divider />
            <div class="flex items-center grid grid-cols-24 h-14 hover:bg-slate-300 rounded-xl" v-for="(task,index) of props.tasks" :key="index">
                <div class="col-start-2 col-end-8">
                    <p class="text-slate-900 font-semibold text-lg">{{ task.title }}</p>
                </div>
                <div class="col-start-9 col-end-13">
                    <p class="text-slate-600">{{ format(task.startDate,'yyyy/MM/dd') }}</p>
                </div>
                <div class="col-start-14 col-end-18">
                    <p :class="[task.dueDate.getTime() < addDays(new Date(),4).getTime() ? 'text-red-600' : 'text-slate-600']">{{ format(task.dueDate,'yyyy/MM/dd') }}</p>
                </div>
            </div>
            <!-- 追加コンポーネント -->
            <div v-if="addtionTask !== undefined">
                <div class="flex items-center grid grid-cols-24 h-14 rounded-xl">
                    <div class="col-start-2 col-end-8">
                    <InputText class="w-full" v-model="addtionTask.title" />
                    </div>
                    <div class="col-start-9 col-end-13">
                        <DatePicker v-model="addtionTask.startDate" dateFormat="yy/mm/dd" />
                    </div>
                    <div class="col-start-14 col-end-18">
                        <DatePicker v-model="addtionTask.dueDate" dateFormat="yy/mm/dd" />
                    </div>
                    <div class="col-start-21 col-end-23">
                        <Button label="削除" severity="danger" @click="onClickDeleteProvisinalTask()"></Button>
                    </div>
                    <div class="col-start-23 col-end-25">
                        <Button label="追加" severity="success" @click="onClickAddTask()" :disabled="!addtionTask.title"></Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.custom-divider[primevue-custom-divider]{
    --p-divider-horizontal-margin:0.25rem 0
}
</style>