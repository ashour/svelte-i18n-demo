<script>
    import { _ } from '../../services/i18n';
</script>

<style>
    .footer {
        margin-top: 2rem;
        background-color: #4a4a4a;
        color: #f7f7f7;
    }

    .footer :global(a),
    .footer :global(a:active),
    .footer :global(a:hover),
    .footer :global(a:visited) {
        color: #65b6e3;
    }
</style>

<footer class="footer">
    <div class="content has-text-centered">
        <p>
            {@html $_('footer.line1', { phraseUrl: 'https://phrase.com/blog' })}
            {@html $_('footer.line2', {
                svelteUrl: 'https://svelte.dev/',
                bulmaUrl: 'https://bulma.io',
            })}
        </p>
    </div>
</footer>