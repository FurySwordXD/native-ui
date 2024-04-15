import { hookstate, useHookstate } from '@hookstate/core';

interface LocalizedStrings {
    [text: string]: {
        [locale: string]: string;
    }
}

declare global {
    var LOCALIZED_STRINGS: LocalizedStrings;
}

LOCALIZED_STRINGS = {};

const currentLocaleState = hookstate('en');

export default function useCurrentLocale()
{
    return useHookstate(currentLocaleState);
}