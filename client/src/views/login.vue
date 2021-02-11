<template>
  <div class="container mx-auto my-auto shadow p-3 mb-5 mt-5 crem rounded" >
		<div class="card mx-auto bg-white shadow p-3  crem rounded" style="width: 30em; height: 24em;">
			<div class="card-body">
				<h5 class="card-title text-center">Login</h5>
				<form v-on:submit.prevent="login">
					<div class="mb-5 mt-5">
						<input type="email" v-model="email" class="form-control" placeholder="email">
					</div>
					<div class="mb-4">
						<input type="password" v-model="password" class="form-control" placeholder="password">
					</div>
					<div class="row">
						<div class="col">
							<button type="submit" class="btn btn-primary ">Login</button>
						</div>
						<div class="col">
							<div class="g-signin2" data-onsuccess="onSignIn"></div>
						</div>
					</div>
				</form>
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
	}
}
</script>

<style>

</style>