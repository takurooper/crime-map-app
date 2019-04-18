import Vue from "vue";
import IndexPage from "@/Index";

const app = new Vue({
    el: '#app',
    data: {
        todos: []
    },
    methods: {
    },
    components:  { IndexPage }
})