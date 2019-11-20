import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// use은 vue 의 글로벌 함수를 사용하고 싶을떄 사용을 함

//store을 외부에서 사용하려면 main.js에서 명시하면서 선언을 해줘야한다.

const storage = {
    fetch() { 
            if (localStorage.length > 0) {
              for (var i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
                  this.todoItems.push(
                    JSON.parse(localStorage.getItem(localStorage.key(i)))
                  );
                }
            }
        }
    },
}

export const store = new Vuex.Store({
    // main.js 에다가 명시를 해 놓아야함 연산에서 
    state : { 
        todoItems: [],
    }
}) 
