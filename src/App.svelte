<script>
    import { setupI18n } from './services/i18n';
    import Header from './components/Layout/Header.svelte';
    import Footer from './components/Layout/Footer.svelte';
    import MovieGrid from './components/Movies/MovieGrid.svelte';

    setupI18n({ withLocale: 'en' });
</script>

<style>
    main { padding: 0 1rem; }
</style>

<Header />

<main role="main">
    <MovieGrid />
</main>

<Footer />
