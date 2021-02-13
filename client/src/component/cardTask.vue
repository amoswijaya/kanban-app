<template>
  <!-- tempat card-back-log -->
  <div class="card" id="cardSize">
    <div class="card-body">
      <div class="row">
        <div class="col-12">
          <h6 class="card-title">{{ task.title }}</h6>
          <p class="card-text text-muted my-1">
            <small>from : {{ task.writtenBy }}</small>
          </p>
          <p class="card-text">
            <small>{{ task.description }}</small>
          </p>
        </div>
        <div class="col-6 offset-6 align-items-end d-flex">
          <a href="#"
            ><span
              class="material-icons color-icons"
              @click.prevent="deleteTask(task.id)"
              >delete</span
            ></a
          >
          <a href="#" v-if="task.category !== 'Done'" ><span class="material-icons" @click.prevent="move(task.id)" >exit_to_app</span></a>
          <a href="#"
            ><span class="material-icons" @click.prevent="formEdit(task.id)">drive_file_rename_outline</span></a
          >
        </div>
      </div>
    </div>
  </div>
  <!-- end  tempat card-back-log -->
</template>

<script>
export default {
  props: ["task"],
  methods: {
    deleteTask(id) {
      this.$emit("deleteTask", id);
    },
    formEdit(id){
      this.$emit('formEdit', id)
    },
    move(id){
      this.$emit('move', id)
    }
  },
};
</script>

<style>
</style>