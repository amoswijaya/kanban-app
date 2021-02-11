<template>
  <!-- tempat card-back-log -->
  <div class="scroll">
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-12">
            <h6 class="card-title"></h6>
            <p class="card-text text-muted my-1">
              <small>from : </small>
            </p>
            <p class="card-text"><small></small></p>
          </div>
          <div class="col-6 offset-6 align-items-end d-flex">
            <a href="#"
              ><span
                class="material-icons color-icons"
                v-on:click.prevent="deleteTask()"
                >delete</span
              ></a
            >
            <a href="#"><span class="material-icons">exit_to_app</span></a>
            <a href="#"
              ><span class="material-icons" v-on:click.prevent="showFormEdit()"
                >drive_file_rename_outline</span
              ></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end  tempat card-back-log -->
</template>

<script>
export default {};
</script>

<style>
</style>