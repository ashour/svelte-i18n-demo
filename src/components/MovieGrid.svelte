<script>
    import Movie from './Movie.svelte';

    function fetchMovies() {
        return fetch('/data/movies.json')
                .then(response => response.json());
    }
</script>

{#await fetchMovies()}
    <p>Loading...</p>
{:then movies}
    <div class="columns is-mobile is-multiline">
        {#each movies as movie}
            <div class="column is-one-third-desktop is-half-tablet is-full-mobile">
                <Movie {movie} />
            </div>
        {/each}
    </div>
{:catch error}
    <p>There was a problem loading movies.</p>
{/await}