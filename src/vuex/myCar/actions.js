import {SYNC_UPDATE} from "./count"

export default{
    //初始化cars
    initCars({commit}){
        let cars = getCar()
        commit(SYNC_UPDATE,cars)
    },
    //添加商品到购物车方法
    addGoodInCar({commit},good){//cars:[{id,XX,num:1},{},{}]
        //获取后端返回来的购物车(一个异步的过程)
        
        setTimeout(()=>{
            //获取后端返回来的购物车
            let cars = getCar();
            //查看是否有数据
            let isHas = cars.some((item)=>{//看一下购物车里的id是否跟传过来过来的商品id是否一样
                if(item.name == good.name){//一样的话，商品已经存在在购物车中
                    item.num++;
                    return true;
                }
            })
            if(!isHas){//购物车中不存在你传递来的good这个商品
                good.num = "1";
                cars.push(good)
            }
            //通知后端同步更改cars值
            localStorage.cars = JSON.stringify(cars)
            //多组件之间需要共享cars，vuex也需要同步
            commit(SYNC_UPDATE,cars)
        },500)
    },
    //减少商品
    reduceGoodInCars({commit},good){
        let cars = getCar()
        cars = cars.filter(item=>{
            if(item.name === good.name){
                item.num--
                if(item.num<=0) return false;//返回false代表之间从数组里面删除此元素
            }
            return true;
        })
        //通知后端同步的更改car的值
        localStorage.cars = JSON.stringify(cars)
        //多组件之间要共享cars  vuex这边也需要同步一下
        commit(SYNC_UPDATE,cars)
    }
}










//本地存储模拟后台数据库返回的购物车
function getCar(){
    return JSON.parse(localStorage.cars?localStorage.cars:'[]')
}