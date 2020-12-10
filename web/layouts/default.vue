<template>
	<div class="w-full h-screen flex flex-col p-16 bg-gray-400 pt-0">
		<a-row class="min-h-0.75/4" type="flex" justify="space-between" align="middle">
			<h1 class="bg-white rounded p-4 shadow ring-4 ring-gray-700 text-black">SHOP MANAGEMENT</h1>
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
