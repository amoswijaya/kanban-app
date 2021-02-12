<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-3">
        <addFrom v-if="!editStatus" :dataEdit="dataEdit" @addTasks="addTask"></addFrom>
        <editFrom v-else :dataEdit="dataEdit" @saveEdit='saveEdit' ></editFrom>
      </div>
      <div class="col-9">
        <div class="row">
          <div class="col">
            <category
              :tasks="dataTasks"
              :title="'Back-log'"
              @deleteTask="deleteTask"
              @formEdit="formEdit"
              @move="move"
            ></category>
          </div>
          <div class="col">
            <category
              :tasks="dataTasks"
              :title="'Todo'"
              @deleteTask="deleteTask"
              @formEdit="formEdit"
              @move="move"
            ></category>
          </div>
          <div class="col">
            <category
              :tasks="dataTasks"
              :title="'Doing'"
              @deleteTask="deleteTask"
              @formEdit="formEdit"
              @move="move"
            ></category>
          </div>
          <div class="col">
            <category
              :tasks="dataTasks"
              :title="'Done'"
              @deleteTask="deleteTask"
              @formEdit="formEdit"
              @move="move"
            ></category>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import addFrom from "../component/addForm";
import category from "../component/category.vue";
import editFrom from "../component/editForm";

export default {
  data() {
    return {
    };
  },
  components: {
    addFrom,
    editFrom,
    category,
  },
  props: ["dataTasks", "dataEdit", 'editStatus'],
  methods: {
    deleteTask(id) {
      this.$emit("deleteTask", id);
    },
    addTask(task){
       this.$emit('addTask', task)
    },
    formEdit(id){
      this.$emit('formEdit', id)
    },
    saveEdit(task){
      this.$emit('saveEdit', task)
    },
    move(id){
      this.$emit('move', id)
    }
  },
  mounted(){
    this.$emit('getTasks')
  }
};
</script>

<style>
</style>