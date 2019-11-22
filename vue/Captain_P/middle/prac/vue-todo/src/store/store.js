import Vue from 'vue'
import Vuex from 'vuex'
import todoApp from './modules/todoApp'

//데이터 속성에 따라서 다르게 음직이겠다느 거


//* 그렇다면은 가장 우선시로 발동하는게 글로벌로 먼저 진행을 하고, 지역을 그 다음으로 선언을 하는건가? 아니면 글로벌에서 지역을 호출하는건가?  */




// use은 vue 의 글로벌 함수를 사용하고 싶을떄 사용을 함
//store을 외부에서 사용하려면 main.js에서 명시하면서 선언을 해줘야한다.
Vue.use(Vuex);

//전역함수로 사용이 가능하지만, 지역으로 구성되어있는 vue의 api들을 공통 함수로 빼기 위한 소스

// mutations은 일반 vue의 methods와 같다고 보면 됨, state는 data와 같다고 보면 된다 
export const store = new Vuex.Store({
    // main.js 에다가 명시를 해 놓아야함 연산에서 
    modules:{
        todoApp: todoApp
    }
})

