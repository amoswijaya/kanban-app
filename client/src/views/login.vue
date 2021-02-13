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
							<g-signin-button
							  class="btn btn-primary"
								:params="googleSignInParams"
								@success="onSignInSuccess"
								@error="onSignInError">
								Sign in with Google
							</g-signin-button>
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
			password:'',
			googleSignInParams: {
				client_id: '638165817231-ns27qioc6tq2gfkn3dc7jeq896dpjtuj.apps.googleusercontent.com'
			}
		}
	},
	props:[
		
	],
	methods:{
		login() {
			const data = {
				email:this.email,
				password:this.password
			}
			this.$emit('login', data)
			this.email = ''
			this.password = ''
		},
		onSignInSuccess (googleUser) {
      // `googleUser` is the GoogleUser object that represents the just-signed-in user.
      // See https://developers.google.com/identity/sign-in/web/reference#users
      this.$emit('onSignInSuccess', googleUser)
    },
    onSignInError (error) {
      // `error` contains any error occurred.
      this.$emit('onSignInError', error)
    }
	}
}
</script>

<style>
.g-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #3c82f7;
  color: #fff;
  box-shadow: 0 3px 0 #0f69ff;
}
</style>