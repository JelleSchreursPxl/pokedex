import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDecector from 'i18next-browser-languagedetector';

i18n.
  use(LanguageDecector).
  use(initReactI18next).
  init({
    resources: {
      en: {
        translation: {
          "Settings": "Settings",
          "Dark Mode": "Dark Mode",
          "Language": "Language",
          "Search ...": "Search ...",
          "Search": "Search",
          "Pokedex": "Pokedex",
          "Home": "Home",
          "About": "About",
        }
      },
      nl: {
        translation: {
          "Settings": "Instellingen",
          "Dark Mode": "Donkere Modus",
          "Language": "Taal",
          "Search ...": "Zoeken ...",
          "Search": "Zoeken",
          "Pokedex": "Pokedex",
          "Home": "Home",
          "About": "Over",
        }
      }
    },
    fallbackLng: 'en',
    debug: true,

    ns: ['translation'],
    defaultNS: 'translation',

    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;