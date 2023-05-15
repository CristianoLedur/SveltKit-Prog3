<script>
    import '../global.css';
    import Header from '$lib/Header.svelte';
    import Footer from '$lib/Footer.svelte';


    // function backToTop() {
	// 	window.scrollTo({
	// 		top: 0,
	// 		behavior: 'auto'
  	// 	});
	// };


</script>
<Header />
<main>
	<slot/>
</main>
<!-- Botão para ir ao topo -->
<Footer />