<template>
	<!--App.vue-->
	<div id="app" class="container">
		<nav class="nav">
			<ul class="nav">
				<router-link tag="li" exact-active-class="exact" active-class="active" to="/" exact class="nav-item">
					<a class="nav-link">Home</a>
				</router-link>

				<router-link tag="li" exact-active-class="exact" active-class="active" to="/posts" exact class="nav-item">
					<a class="nav-link">Posts</a>
				</router-link> 

				<router-link tag="li" exact-active-class="exact" active-class="active" to="/albums" exact class="nav-item">
					<a class="nav-link">Albums</a>
				</router-link> 

				<router-link tag="li" exact-active-class="exact" active-class="active" to="/photos" exact class="nav-item">
					<a class="nav-link">Photos</a>
				</router-link>
			</ul>
		</nav>
		<!-- aqui se cargan los componentes configurados en index.js-->
		<router-view/>
	</div>
	<!--App.vue-->
</template>

<script>
export default {
	name: 'App'
}
</script>

<style>
</style>
