<template>
	<!--App.vue-->
	<div id="app" class="container">

		<!--router-link-->
		<eafnavtop/>

		<router-view :key="$route.fullPath"></router-view>
	</div>
	<!--App.vue-->
</template>

<script>
//https://stackoverflow.com/questions/42684661/adding-bootstrap-to-vue-cli-project
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import eafnavtop from '@/elements/Eafnavtop'

export default {
	name: 'App',
	components: {
		eafnavtop
	}
}
</script>

