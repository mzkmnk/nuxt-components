import { addDays } from "date-fns";

export type TTask = {
    title:string;
    description?:string;
    status:TStatus;
    startDate:Date;
    dueDate:Date;
}

export type TStatus = 'todo'|'progress'|'done';

export type TInternalState = {
    tasks:TTask[],
    status:{
        [key in TStatus]:{
            isOpen:boolean,
            task?:TTask
        }
    }
}

export const generateInitTask = (status:TStatus):TTask => {
    return {
        title:'',
        description:'',
        status,
        startDate:new Date(),
        dueDate:addDays(new Date(),10)
    }
}

export const internalState : TInternalState = {
    tasks:[],
    status:{
        todo:{
            isOpen:true,
            task:undefined
        },
        progress:{
            isOpen:true,
            task:undefined
        },
        done:{
            isOpen:false,
            task:undefined
        }
    }
}


export const useInternalStore = defineStore(
    "internalStore",
    {
        state:():TInternalState => {
            return internalState;
        },
        actions:{
            addTask(task:TTask,status:TStatus):void{
                this.tasks.push({...task});
                this.status[status] = {
                    ...this.status[status],
                    task:undefined
                }
            },

            deleteProvisionalTask(status:TStatus):void{
                this.status[status].task = undefined;
            },

            provisionalTask(status:TStatus):void{
                this.status[status] = {
                    ...this.status[status],
                    task:generateInitTask(status),
                }
            },
            
            toggleStatusOpen(status:TStatus):void{
                this.status[status].isOpen = !this.status[status].isOpen;
            }
        },
        getters:{
            getTasksTodo():TTask[]{
                return this.tasks.filter((task) => task.status === 'todo').sort((a,b) => a.dueDate.getTime() - b.dueDate.getTime());
            },
            getTasksProgress():TTask[]{
                return this.tasks.filter((task) => task.status === 'progress').sort((a,b) => a.dueDate.getTime() - b.dueDate.getTime());
            },
            getTasksDone():TTask[]{
                return this.tasks.filter((task) => task.status === 'done').sort((a,b) => a.dueDate.getTime() - b.dueDate.getTime());
            }
        },
        persist:{
            omit:['status'],
            serializer:{
                serialize(data) {
                    return JSON.stringify(data);
                },
                deserialize(data) {
                    const parseData:TInternalState = JSON.parse(data);
                    parseData.tasks.map((task,index) => {
                        parseData.tasks[index].startDate = new Date(task.startDate)
                        parseData.tasks[index].dueDate = new Date(task.dueDate)
                    });
                    return parseData;
                },
            },
        }
    },
)