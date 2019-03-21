Vue.component('search-el', {
    data(){
        return {
            userSearch: ''
        }
    },
    method: {
        filter(){
            let regexp  = new RegExp(this.userSearch, 'i')
            this.filtered = this.products.filter(el => regexp.test(el.product_name))
        }
    },
    mounted(){
        getJson(url)
        {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error)
                })
        }
    },
    template: `
    <form action="#" class="search-form" @submit.prevent="$parent.$refs.products.filter(userSearch)">
        <input type="text" class="search-field" v-model="userSearch">
        <button class="btn-search" type="submit">
            <i class="fas fa-search"></i>
        </button>
    </form>`
})