<template>
	<div class="w-full h-screen flex flex-col p-16 bg-gray-400">
		<a-row class="min-h-0.75/4" type="flex" justify="end">
			<a-button v-if="$route.path != '/'" @click="() => $router.go(-1)" class="w-min m-4">
				Back
			</a-button>
		</a-row>
		<Nuxt />
	</div>
</template>
<script>
export default {}
</script>
