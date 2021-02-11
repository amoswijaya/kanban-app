<template>
  <div class="container-fluid" >
		<div class="row">
			<div class="col-3">
				<addFrom></addFrom>
				<editFrom></editFrom>
			</div>
			<div class="col-9">
				<div class="row">
					<div class="col">
						<category></category>
					</div>
					<div class="col">
						<category></category>
					</div>
					<div class="col">
						<category></category>
					</div>
					<div class="col">
						<category></category>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import addFrom from '../component/addForm'
import category from '../component/category.vue'
import editFrom from '../component/editForm'

export default {
	data(){
		return {

		}
	},
	components:{
		addFrom,
		editFrom,
		category
	}
}
</script>

<style>

</style>