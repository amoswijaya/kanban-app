<template>
   <!-- form edit -->
        <div class="card mt-4 form-bg-color">
          <div class="card-body">
            <form v-on:submit.prevent="saveEdit">
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Title"
                />
              </div>
              <div class="mb-3">
                <textarea
                  name="editDescription"
                  cols="15"
                  rows="5"
                  class="form-control"
                  placeholder="Description"
                ></textarea>
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  
                  class="form-control"
                  placeholder="your name"
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

}
</script>

<style>

</style>