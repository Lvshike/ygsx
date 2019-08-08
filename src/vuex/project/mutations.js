import {ADD} from './const'
import {CHANGE} from './const'
export default{
    [ADD](state,data){
      state.fruitLists = data
    },
    [CHANGE](state,nicai){
      state.biaozhi = nicai
    }
}