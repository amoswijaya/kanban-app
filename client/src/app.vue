<template>
  <div>
    <navBar @changePage="changePage" @logOut="logout" :page="page"></navBar>
    <register @register="register" v-if="page === 'register'"></register>
    <login @login="login" v-else-if="page === 'login'"></login>
    <dashboard
      :dataTasks="tasks"
      :editStatus="editStatus"
      :dataEdit="dataEdit"
      v-else-if="page === 'dashboard'"
      @deleteTask="deleteTask"
      @getTasks="getTasks"
			@addTask="addTask"
      @formEdit="formEdit"
      @saveEdit="saveEdit"
      @move="moveCategory"
    ></dashboard>
  </div>
</template>

<script>
import dashboard from "./views/dashboard";
import navBar from "./component/navBar";
import register from "./views/register";
import login from "./views/login";
import axios from "axios";
export default {
  components: {
    dashboard,
    navBar,
    register,
    login,
  },
  data() {
    return {
      page: "",
      url: "http://localhost:3000/",
      tasks: [],
      dataEdit:null,
      editStatus:''
    };
  },
  methods: {
    changePage(value) {
      this.page = value;
    },
    checkAuth() {
      let selectedPage = "";
      if (!localStorage.getItem("access_token")) {
        selectedPage = "login";
      } else {
        selectedPage = "dashboard";
      }
      this.page = selectedPage;
    },
    login(data) {
      console.log(data);
      axios({
        method: "post",
        url: this.url + "users/login",
        data: {
          email: data.email,
          password: data.password,
        },
      })
        .then((res) => {
          localStorage.setItem("access_token", res.data.accsess_token);
          this.checkAuth();
        })
        .catch((err) => {
          console.log(err);
          swal({
            title: err.response.data.err,
            icon: "error",
          });
        });
    },
    register(data) {
      console.log(data);
      axios({
        method: "post",
        url: this.url + "users/register",
        data: {
          email: data.email,
          password: data.email,
        },
      })
        .then((value) => {
          console.log(value.data);
          this.page = "login";
        })
        .catch((err) => {
          console.log(err.response.data.errors);
          swal({
            title: err.response.data.errors[0],
            icon: "error",
          });
        });
    },
    getTasks() {
      axios({
        method: "GET",
        url: this.url + "tasks",
        headers: {
          token: localStorage.getItem("access_token"),
        },
      })
        .then((result) => {
          console.log(result.data);
          this.tasks = result.data;
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    logout: function () {
      localStorage.removeItem("access_token");
      this.checkAuth();
    },
    deleteTask(id) {
      console.log("inih delete");
      axios({
        method: "DELETE",
        url: this.url + `tasks/${id}`,
        headers: {
          token: localStorage.getItem("access_token"),
        },
      })
        .then((res) => {
          this.getTasks();
          swal({
            title: "Succsess delete this task!!!!yeay",
            icon: "success",
          });
        })
        .catch((err) => {
					console.log(err);
          swal({
            title: "You cannot delete this task!!!!",
            icon: "error",
          });
        });
    },
    addTask(task) {
			console.log(task);
      axios({
        method: "POST",
        url: this.url + "tasks",
        headers: {
          token: localStorage.getItem("access_token"),
        },
        data: {
          title:task.title,
          description:task.description,
          writtenBy:task.writtenBy,
          category:task.category,
        },
      })
        .then((task) => {
          swal({
            title: "Succes adding your task!!",
            icon: "success",
          });
          this.getTasks();
        })
        .catch((err) => {
					console.log(err);
          // swal({
          //   title: err.response.data.errors[0],
          //   icon: "error",
          // });
        });
    },
    formEdit(id){
      console.log(id, 'inih di sinih');
			axios({
				method:'GET',
				url:this.url + `tasks/${id}`,
				headers: {
					token: localStorage.getItem('access_token')
				}
			})
			.then(({data}) => {
        this.editStatus='edit'
				this.dataEdit = data
			})
			.catch((err) => {
        console.log(err);
			this.editStatus = ''
				swal({
					title: 'You cannot move this task!!!!',
					icon: 'error'
				})
			})
		},
    saveEdit(task){
      console.log(task);
			axios({
				method:'PUT',
				url:this.url +`tasks/${task.id}`,
				data:{
					title: task.title,
					description: task.description,
					writtenBy:task.writtenBy
				},
				headers: {
					token: localStorage.getItem('access_token')
				}
			})
			.then((res) => {
        this.getTasks()
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
		},
    moveCategory(id) {
      console.log(id);
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
          this.getTasks()
					console.log(res.data);
				})
				.catch((err) => {
					swal({
						title: 'You cannot move this task!!!!',
						icon: 'error'
					})
				})
		},
  },
  created() {
    console.log("inih created");
    this.checkAuth();
  },
  mounted() {
    this.checkAuth();
  },
};
</script>

<style>
</style>