<template>
  <!-- form add task -->
        <div class="card mt-4 form-bg-color">
          <div class="card-body">
            <form v-on:submit.prevent="addTask">
              <div class="mb-3">
                <input
                  type="text"
                  v-model="title"
                  class="form-control"
                  placeholder="Title"
                />
              </div>
              <div class="mb-3">
                <textarea
                  name="description"
                  cols="15"
                  rows="5"
                  v-model="description"
                  class="form-control"
                  placeholder="Description"
                ></textarea>
              </div>
              <div class="mb-3">
                <select class="form-select" v-model="category">
                  <option disabled>-- Category --</option>
                  <option selected value="Back-log">Back-log</option>
                  <option value="Product">Product</option>
                  <option value="Development">Development</option>
                  <option value="Done">Done</option>
                </select>
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  v-model="name"
                  class="form-control"
                  placeholder="your name"
                />
              </div>
              <button type="submit" class="btn btn-primary">Add task</button>
            </form>
          </div>
        </div>
        <!-- end form add task -->
</template>

<script>
export default {

}
</script>

<style>

</style>