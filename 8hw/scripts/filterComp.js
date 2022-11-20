Vue.component('filter-comp', {
    data() {
        return {
            userSearch: ''
        }
    },
    methods: {
        
    },
    mounted() {
        
    },
    template: `
    <form action="#" class="search-form" @submit.prevent="$root.$refs.main.$refs.products.filter(userSearch)">
                <input type="text" class="search-field" v-model="userSearch">
                <button type="submit" class="btn-search">
                    <i class="fas fa-search"></i>
                </button>
    </form>
    `
})