export const useInternalStore = defineStore(
    "internalStore",
    {
        state:() => ({
            path:'/internal/home',
        }),
        getters:{
            getPath:(store) => (store.path)
        },
        actions:{
            setPath(path:string):void{
                this.path = '/internal/'+path;
            }

        },
    },
)