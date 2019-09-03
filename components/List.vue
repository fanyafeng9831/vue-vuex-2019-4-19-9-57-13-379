
<template>
  <nav class="TodoList">
    <section class="main">
      <article>
        <h2>Jquery To Do List</h2>
        <p>
          <em>Simple Todo List with adding and filter by diff status.</em>
        </p>
      </article>
      <article>
        <input class="input-text" type="text" name="ListItem" v-model="currMsg" />
        <div id="button" @click="commit">Add</div>
      </article>
		<ol>
            <li v-for="index in getMessagesNum()" v-bind:key="index" :class="{'checked': $store.getters.getButtonsByIndex(index)===true}">
                <label><input name="done-todo" type="checkbox" class="done-todo" v-model="$store.state.buttons[index-1]"></label>
                <span contenteditable="true" class="done-todo">{{$store.getters.getMessagesByIndex(index)}}</span>
            </li>
        </ol>

        <div>
            <ul id="filters">
                <li>
                    <a href="#" data-filter="all">ALL</a>
                </li>
                <li>
                    <a href="#" data-filter="active">Active</a>
                </li>
                <li>
                    <a href="#" data-filter="complete" v-on:click="clear">Complete</a>
                </li>
            </ul>
  </nav>
</template>



<script>
    export default {
        name: 'List',
        data(){
            return{
                isChecked: false
            }
        },
		//定义绑定方法
        methods:{
		
		//提交方法，调用store中的方法
            commit(){
                let message = document.getElementById("ListItem").value;
                this.$store.commit('pushMessages',message);
                this.$store.commit('pushButtons',false);
            },

		//清除方法，调用store中的方法
            clear(){
                this.$store.commit('clearMessages');
                this.$store.commit('clearButtons');
                document.getElementById("ListItem").value = "";
            },

            getMessagesNum(){
                return this.$store.getters.getMessages().length;
            }

        }

    }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h2 {
        display: block;
        font-size: 1.5em;
        margin-block-start: 0.83em;
        margin-block-end: 0.83em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;
    }
    p {
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }
    i, cite, em, var, address, dfn {
        font-style: italic;
    }
    .list{
        padding: 20px;
        width: 400px;
        margin: 0 auto;
        margin-top: 40px;
        background: white;
        border-radius: 5px;
    }
    .input-text {
        width: 70%;
    }
    input {
        padding: 4px 15px 4px 0;
        background-color: white;
        -webkit-rtl-ordering: logical;
        cursor: text;
        border-width: 3px;
        border-style: inset;
        border-color: initial;
        border-image: initial;
        text-rendering: auto;
        color: initial;
        letter-spacing: normal;
        word-spacing: normal;
        text-transform: none;
        text-indent: 0px;
        text-shadow: none;
        display: inline-block;
        text-align: start;
        margin: 0em;
        font: 400 13.3333px Arial;
    }
    #button:hover {
        cursor: pointer;
        opacity: .8;
    }
    #button {
        display: inline-block;
        background-color: #fc999b;
        color: #ffffff;
        border-radius: 5px;
        text-align: center;
        margin-top: 2px;
        padding: 5px 15px;
    }
    ol {
        padding-left: 20px;
        display: block;
        list-style-type: decimal;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 40px;

    }
    li {
        padding: 5px;
        color: #000;
        display: list-item;
        text-align: -webkit-match-parent;
    }
    ol li {
        padding: 5px;
        color: #000;
    }
    .checked {
        color: #999;
        text-decoration: line-through;
    }
    #filters {
        text-align: center;
        margin-bottom: -10px;
        margin-top: 40px;
    }

    #filters li a {
        color: #fc999b;
        text-decoration: none;
        border: 1px solid transparent;
        border-radius: 3px;

    }
    a{
        margin: 3px;
        padding: 3px 7px;
    }
    #filters li {
        display: inline;
        margin: 0 0 5px 0;
        padding: 8px;
        list-style: none;
        outline: none;
    }
    ul, menu, dir {
        display: block;
        list-style-type: disc;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 40px;
    }
    .done-todo{
        cursor:pointer;
        margin: 5px 5px 2px 0;
    }
    span{
        word-break: break-all;
        width: 70%;
    }
</style>
