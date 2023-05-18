<script>
    import '../global.css';
    import Header from '../lib/Header.svelte';
    import Footer from '../lib/Footer.svelte';
	import ScrollTop from '../lib/assets/ImgArrow-up.svg';
	import * as animateScroll from 'svelte-scrollto';

    function backToTop() {
		animateScroll.scrollToTop();
	};
</script>

<Header />
<main>
	<slot/>
	<button id="btnTopo" on:click={backToTop}>
		<img src={ScrollTop} alt="Arrow top" />
	</button>
</main>
<Footer />