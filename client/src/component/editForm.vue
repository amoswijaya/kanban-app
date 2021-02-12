<template>
   <!-- form edit -->
        <div class="card mt-4 form-bg-color">
          <div class="card-body">
            <form v-on:submit.prevent="save">
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Title"
                  v-model="dataEdit.title"
                />
              </div>
              <div class="mb-3">
                <textarea
                  name="editDescription"
                  cols="15"
                  rows="5"
                  class="form-control"
                  placeholder="Description"
                  v-model="dataEdit.description"
                ></textarea>
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  
                  class="form-control"
                  placeholder="your name"
                  v-model="dataEdit.writtenBy"
                />
              </div>
              <button type="submit" class="btn btn-primary">Save</button>
            </form>
          </div>
        </div>
        <!-- endform edit -->
</template>

<script>
export default {
  props:['dataEdit'],
  data(){
    return {
      
    }
  },
  methods:{
    save(){
      const newTask ={
        title:this.dataEdit.title,
        description:this.dataEdit.description,
        writtenBy: this.dataEdit.writtenBy,
        id:this.dataEdit.id
      }
      this.$emit('saveEdit', newTask)
    }
  },
  computed:{
    
  }
}
</script>

<style>

</style>