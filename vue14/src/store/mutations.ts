import {MutationTree} from "vuex"
import state from './state'
const mutations:MutationTree<any>={
    SET_USER(state:any,user:any){
        state.user=user;
    },
    SET_ROUTER(state:any,routes:any){
        state.routers=routes;
    },
}
export default mutations;