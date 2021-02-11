<template>
  <div class="card card-bg-color">
			<div class="card-body">
				<!-- start title -->
						<h5 class="card-title">Back-log</h5>
				<!-- end  title-->
				<cardTask></cardTask>
		</div>
  </div>
</template>

<script>
import cardTask from './cardTask'
export default {
	components:{
		cardTask
	}
};
</script>

<style>
</style>