<template>
	<div>
	<nav class="navbar navbar-inverse crem">
		<div class="container-fluid">
			<div class="navbar-header">
				<a class="navbar-brand" href="#">Kanban</a>
			</div>
			
			<ul class="nav navbar-nav navbar-right list-inline">
				<li><a href="#"  @click="$emit('changePage', 'register')" class="btn">Register</a></li>
				<li><a href="#"  @click="$emit('changePage', 'login')" class="btn">Login</a></li>
				<li><a href="#"  @click="showPage">Logout</a></li>
			</ul>
		</div>
	</nav>
	</div>
</template>

<script>
export default {
		name:'nav',
		props:[
			sendPage
		],
    data(){
        return {
        }
    },
		methods:{
			showPage(){
				console.log(this.page);
			}
		},
		
}
</script>

<style>

</style>