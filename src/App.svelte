<script>
    import { setupI18n, isLocaleLoaded, locale, dir } from './services/i18n';
    import Header from './components/Layout/Header.svelte';
    import Footer from './components/Layout/Footer.svelte';
    import MovieGrid from './components/Movies/MovieGrid.svelte';

    $: if (!$isLocaleLoaded) {
        setupI18n({ withLocale: 'en' });
    }

    $: { document.dir = $dir; }
</script>

<style>
    main { padding: 0 1rem; }
</style>

{#if $isLocaleLoaded}
    <Header />

    <main role="main">
        <MovieGrid />
    </main>

    <Footer />
{:else}
    <p>Loading...</p>
{/if}
