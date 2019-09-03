import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

//定义变量
const initState = {
    messages: [],
    buttons: []
};

//定义getters方法
const store = new Vuex.Store({
    state: initState,
	
    getters: {
        getMessages(state){
            return function () {
                return state.messages;
            };
        },
		
        getMessagesByIndex: function (state) {
            return function (index) {
                return state.messages[index - 1];
            };
        },
		
        getButtonsByIndex: function (state) {
            return function (index) {
                return state.buttons[index - 1];
            };
        }
    },
	
    mutations:{
		//Messages方法
        pushMessages(state,message){
            state.messages.push(message);
        },
		
		//清楚Messages
        clearMessages(state){
            state.messages = [];
        },

		//更新Buttons
        updateButtonsByIndex(state,data){
            let oldButtons = state.buttons;
            oldButtons[data.index - 1] = data.value;
            state.buttons = [];
            for(let i=0; i<oldButtons.length; i++){
                state.buttons.push(oldButtons[i]);
            }
        },
		
        pushButtons(state,button){
            state.buttons.push(button);
        },
		
		//清楚Buttons
        clearButtons(state){
            state.buttons = [];
        }
    }
}) ;

export default store;
