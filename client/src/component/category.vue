<template>
  <div class="card card-bg-color">
    <div class="card-body">
      <!-- start title -->
      <h5 class="card-title">{{ title }}</h5>
      <!-- end  title-->
      <div class="scroll">
        <cardTask
          v-for="task in filteredTask"
          :key="task.id"
          :task="task"
          @deleteTask="deleteTask"
          @formEdit="formEdit"
          @move="move"
        ></cardTask>
      </div>
    </div>
  </div>
</template>

<script>
import cardTask from "./cardTask";
export default {
  components: {
    cardTask,
  },
  props: ["tasks", "title"],
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
  computed: {
    filteredTask() {
      return this.tasks.filter((el) => el.category === this.title);
    },
  },
};
</script>

<style>
</style>