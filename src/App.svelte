<script>
    import Header from './components/Layout/Header.svelte';
    import Footer from './components/Layout/Footer.svelte';
    import MovieGrid from './components/Movies/MovieGrid.svelte';
</script>

<style>
    main { padding: 0 1rem; }
</style>

<Header />

<main role="main">
    <MovieGrid />
</main>

<Footer />
