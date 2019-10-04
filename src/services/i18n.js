import { dictionary, locale, _ } from 'svelte-i18n';

function setupI18n({ withLocale: _locale } = { withLocale: 'en' }) {
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

    locale.set(_locale);
}


export { _, setupI18n };
