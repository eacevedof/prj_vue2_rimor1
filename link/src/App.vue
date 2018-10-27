<template>
	<!--App.vue-->
	<div id="app" class="container">
		<eafnavtop/>
		<!-- aqui se cargan los componentes configurados en index.js-->
		<router-view/>
	</div>
	<!--App.vue-->
</template>

<script>
import eafnavtop from '@/elements/Eafnavtop'
export default {
	name: 'App',
	components: {
		eafnavtop
	}
}
</script>

<style>
</style>
