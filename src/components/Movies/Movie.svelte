<script>
    import { _, locale, formatDate } from '../../services/i18n';

    export let movie;

    const {
        imageUrl: src,
        awardWinCount,
        awardNominationCount: nominationCount,
        releaseDate: released,
    } = movie;

    $: title = movie[`title_${$locale}`];
</script>

<style>
    .box {
        background-color: #f7f7f7;
    }
    @media screen and (min-width:769px) {
        .box {
            height: 11rem;
        }
    }

    img {
        display: block;
        border-radius: 0.25rem;
        max-height: 100%;
        max-width: 100%;
        object-fit: cover;
    }

    .movie-title {
        margin-top: 0;
    }

    .release-date {
        padding-bottom: 0.5rem;
        margin-bottom: 0.5rem;
        border-bottom: 1px solid #e9e9e9;
    }

    .awards, .nominations {
        font-size: 0.85rem;
    }
</style>

<div class="box">
    <div class="columns is-mobile">
        <div class="column is-one-quarter img-container">
            <img {src} alt="Poster for {title}">
        </div>

        <div class="column">
            <h3 class="is-size-5 is-uppercase movie-title">{title}</h3>

            <p class="release-date">
                {$_('movie.released_at', { date: formatDate(released, { year: 'numeric' }) })}
            </p>

            <p class="awards">
                {$_('movie.won_awards', { n: awardWinCount })}
            </p>

            <p class="nominations">
                {$_('movie.nominated_for_awards', { n: nominationCount })}
            </p>
        </div>
    </div>
</div>