import {ADD} from './const'
import {CHANGE} from './const'
export default{
    addData({commit},data){
        commit(ADD,data)
    },
    addBiaozhi({commit},biaozhi){
        commit(CHANGE,biaozhi)
    }
}