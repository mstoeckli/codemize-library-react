import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import { en, de } from '../public/locales/Translations';

/** @public */
export default i18n
    /**  @desc load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
     *         learn more: https://github.com/i18next/i18next-http-backend
     *         want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn */
    .use(Backend)
    /** @desc detect user language
     *        learn more: https://github.com/i18next/i18next-browser-languageDetector */
    .use(LanguageDetector)
    /** @desc pass the i18n instance to react-i18next. */
    .use(initReactI18next)
    /** @desc init i18next
     *        for all options read: https://www.i18next.com/overview/configuration-options */
    .init({
        fallbackLng: "en",
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: en
            },
            de: {
                translation: de
            }
        }
    });