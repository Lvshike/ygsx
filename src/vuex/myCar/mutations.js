import {SYNC_UPDATE} from "./count"
export default{
    [SYNC_UPDATE](state,newCars){
        state.cars = newCars
    }
}