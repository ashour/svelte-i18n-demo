<script>
    import Header from './components/Header.svelte';
    import Footer from './components/Footer.svelte';
    import MovieGrid from './components/MovieGrid.svelte';
</script>

<style>
    main {
        padding: 0 1rem;
    }
</style>

<Header />

<main role="main">
    <MovieGrid />
</main>

<Footer />
