<template>
    <div>
        <div class="container mx-auto my-auto shadow p-3 mb-5 mt-5 crem rounded" >
            <div class="card mx-auto bg-white shadow p-3  crem rounded" style="width: 30em; height: 24em;">
                <div class="card-body">
                    <h5 class="card-title text-center">Register</h5>
                    <form @submit.prevent="register">
                        <div class="mb-5 mt-5">
                            <input type="email"  class="form-control" placeholder="email" v-model="email" >
                        </div>
                        <div class="mb-4">
                            <input type="password"  class="form-control" placeholder="password" v-model="password">
                        </div>
                        <button type="submit" class="btn btn-primary ">Register</button>
                    </form>
                </div>
            </div>  
        </div>  
    </div>
</template>

<script>
export default {
	data(){
		return {
			email:'',
			password:''
		}
	},
	methods:{
		register(){
			const data = {
				email: this.email,
				password: this.password
			}
			this.$emit('register', data)
		}
	}
}
</script>

<style>

</style>