<template>
	<!--App.vue-->
	<div id="app" class="container">

		<!--router-link-->
		<eafnavtop/>

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
