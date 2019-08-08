import Vue from "vue"
//v-backtop  bind inserted update componentUpdated unbind
Vue.directive("backtop",{
    bind(el,binding,vnode){
        let eventType = binding.arg || "click"
        el.addEventListener(eventType,e=>{
            window.scrollTo(0,0)
        })
    }
})