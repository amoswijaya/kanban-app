<template>
	<div>
	<div class="navbar navbar-inverse crem">
		<div class="container-fluid">
			<div class="navbar-header">
				<h6 class="text-uppercase">kanban</h6>
			</div>
			<ul class="nav navbar-nav navbar-right list-inline">
				<li><a href="#"  v-if="page === 'login'" @click="$emit('changePage', 'register')" class="btn">Register</a></li>
				<li><a href="#" v-if="page === 'register'" @click="$emit('changePage', 'login')" class="btn">Login</a></li>
				<li><a href="#" v-if="page === 'dashboard'" @click="$emit('logOut')" >Logout</a></li>
			</ul>
		</div>
	</div>
	</div>
</template>

<script>
export default {
		name:'navbar',
		props:[
			'page'
		],
    data(){
        return {
        }
    },
		methods:{
			
		},
		
}
</script>

<style>

</style>