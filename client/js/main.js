const app = new Vue({
	el: '#app',
	data: {
		url: 'http://localhost:3000/',
		page: '',
		loginEmail: '',
		loginPassword: '',
		registerEmail: '',
		registerPassword: '',
		title: '',
		description: '',
		name: '',
		category: '',
		tasks: [],
		editTitle: '',
		editDescription: '',
		editName: '',
		editStatus:'',
		editId:''
	},
	methods: {
		changePage(page) {
			this.page = page
		},
		reset() {
			this.loginEmail = ''
			this.loginPassword = ''
			this.registerEmail = ''
			this.registerPassword = ''
			this.name = ''
			this.category = ''
			this.title = ''
			this.description = ''
			this.editName = ''
			this.editTitle = ''
			this.editDescription = ''
		},
		checkAuth() {
			let selectedPage = ''
			if (!localStorage.getItem('access_token')) {
				selectedPage = 'login'
			} else {
				selectedPage = 'kanban'
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
					this.getTask()
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
		},
		register() {
			axios({
					method: 'post',
					url: this.url + 'users/register',
					data: {
						email: this.registerEmail,
						password: this.registerPassword
					}
				})
				.then((value) => {
					console.log(value.data);
					this.page = 'login'
				})
				.catch((err) => {
					console.log(err.response.data.errors);
					swal({
						title:err.response.data.errors[0],
						icon:'error'
					})
				})
				.then(() => {
					this.reset()
				})
		},
		logout: function () {
			localStorage.removeItem('access_token')
			this.checkAuth()
		},
		getTask() {
			axios({
					method: 'GET',
					url: this.url + 'tasks',
					headers: {
						token: localStorage.getItem('access_token')
					}
				})
				.then((result) => {
					this.getTask()
					this.tasks = result.data
				})
				.catch((err) => {
					console.log(err.response);
				})
		},
		deleteTask(id) {
			axios({
					method: 'DELETE',
					url: this.url + `tasks/${id}`,
					headers: {
						token: localStorage.getItem('access_token')
					}
				})
				.then((res) => {
					console.log(res.data);
				})
				.catch((err) => {
					swal({
						title: 'You cannot delete this task!!!!',
						icon: 'error'
					})
				});
		},
		addTask() {
			const title = this.title
			const description = this.description
			const name = this.name
			const category = this.category
			axios({
					method: 'POST',
					url: this.url + 'tasks',
					headers: {
						token: localStorage.getItem('access_token')
					},
					data: {
						title,
						description,
						writtenBy: name,
						category
					}
				})
				.then((task) => {
					swal({
						title: "Succes adding your task!!",
						icon: "success",
					});
					this.reset()
					this.getTask()
				})
				.catch((err) => {
					swal({
						title: err.response.data.errors[0],
						icon: "error",
					});
				})
		},
		moveCategory(id) {
			const category = ['Back-log', 'Todo', 'Doing', 'Done']
			let afterCategory
			axios({
					method: 'GET',
					url: this.url + `tasks/${id}`,
					headers: {
						token: localStorage.getItem('access_token')
					},
				})
				.then(task => {
					afterCategory = category[category.indexOf(task.data.category) + 1]
					console.log(afterCategory);
					return axios({
						method: 'PATCH',
						url: this.url + `tasks/${id}`,
						headers: {
							token: localStorage.getItem('access_token')
						},
						data: {
							category: afterCategory
						}
					})
				})
				.then((res) => {

					console.log(res.data);
				})
				.catch((err) => {
					swal({
						title: 'You cannot move this task!!!!',
						icon: 'error'
					})
				})
		},
		showFormEdit(id){
			this.editStatus = 'edit'
			axios({
				method:'GET',
				url:this.url + `tasks/${id}`,
				headers: {
					token: localStorage.getItem('access_token')
				}
			})
			.then(({data}) => {
				this.editTitle = data.title
				this.editDescription = data.description
				this.editName = data.writtenBy
				this.editId = data.id
			})
			.catch((err) => {
			this.editStatus = ''
				swal({
					title: 'You cannot move this task!!!!',
					icon: 'error'
				})
			})
		},
		saveEdit(){
			axios({
				method:'PUT',
				url:this.url +`tasks/${this.editId}`,
				data:{
					title: this.editTitle,
					description: this.editDescription,
					writtenBy:this.editName
				},
				headers: {
					token: localStorage.getItem('access_token')
				}
			})
			.then((res) => {
				this.reset()
				this.editStatus = ''
				swal({
					title: res.data.msg,
					icon: "success",
				});
			})
			.catch((err) => {
				swal({
					title: err.response.data.errors[0],
					icon: "error",
				});
			})
		}
	},
	created() {
		this.checkAuth()
		this.getTask()
	},
	computed: {
		getBackLog: function () {
			return this.tasks.filter(task => task.category === 'Back-log')
		},
		getProduct: function () {
			return this.tasks.filter(task => task.category === 'Product')
		},
		getDevelopment: function () {
			return this.tasks.filter(task => task.category === 'Development')
		},
		getDone: function () {
			return this.tasks.filter(task => task.category === 'Done')
		}
	}
})