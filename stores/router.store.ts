export type TNavigatePath = '/internal/home'|'/internal/roadmap'|'/internal/inbox';

export const useRouterStore = defineStore(
    'routerStore',
    {
        state:() => {
            return {
                path:'',
            }
        },
        actions:{
            navigate(path:TNavigatePath){
                this.path = path;
                const router = useRouter();
                router.push(path);
            }
        },
        persist:true,
    }
)