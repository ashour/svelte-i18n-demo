<script>
    import { dictionary, locale } from 'svelte-i18n';
    import Header from './components/Layout/Header.svelte';
    import Footer from './components/Layout/Footer.svelte';
    import MovieGrid from './components/Movies/MovieGrid.svelte';

    dictionary.set({
        en: {
            app: {
                title: 'Filmic',
                subtitle: 'A curated collection of eighties movies',
            },
        },
        ar: {
            app: {
                title: 'فيلميك',
                subtitle: 'مجموعة أفلام مختارة من الثمنينات',
            },
        },
    });

    locale.set('en');
</script>

<style>
    main { padding: 0 1rem; }
</style>

<Header />

<main role="main">
    <MovieGrid />
</main>

<Footer />
