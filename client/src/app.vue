<template>
	<div>
		<navBar @changePage="changePage" :sendPage="page"></navBar>
		<register v-if="page === 'register'"></register>
		<login v-else-if="page === 'login'"></login>
		<dashboard v-else-if="page === 'dashboard'"></dashboard>
	</div>
</template>

<script>
import dashboard from './views/dashboard'
import navBar from './component/nav'
import register from './views/register'
import login from './views/login'
import axios from 'axios'
export default {
  components: { 
		dashboard,
		navBar,
		register,
		login
	},
	data(){
		return {
			page :''
		}
	},
	methods:{
		changePage(value){
			this.page = value
		},
		checkAuth() {
			let selectedPage = ''
			if (!localStorage.getItem('access_token')) {
				selectedPage = 'login'
			} else {
				selectedPage = 'dashboard'
			}
			this.page = selectedPage
		},
		login() {
			axios({
					method: 'post',
					url: this.url + 'users/login',
					data: {
						email: this.loginEmail,
						password: this.loginPassword
					}
				})
				.then((res) => {
					localStorage.setItem('access_token', res.data.accsess_token)
					this.checkAuth()
				})
				.catch((err) => {
					swal({
						title:err.response.data.err,
						icon:'error'
					})
				})
				.then(() => {
					this.reset()
				})
		}
	},
	created(){
		console.log('inih created');
		this.checkAuth()
	}
}
</script>

<style>

</style>