import Vue from 'vue'
import App from './App'

new Vue({

    render: h => h(App)
    
    ////mesmo coisa do codigo acima 
    // render(createElement){
    //     return createElement(App)
    // }
    
}).$mount('#app')