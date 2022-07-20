import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';

const i18n = createInstance({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
        en: {
            translation: {
                Global: {
                    WeekDays: {
                        monday: "Mo",
                        tuesday: "Tu",
                        wednesday: "We",
                        thursday: "Th",
                        friday: "Fr",
                        saturday: "Sa",
                        sunday: "Su"
                    },
                    Months: {
                        january: "January",
                        february: "February",
                        march: "March",
                        april: "April",
                        may: "May",
                        june: "June",
                        july: "July",
                        august: "August",
                        september: "September",
                        october: "October",
                        november: "November",
                        december: "December"
                    }
                },
                Search: {
                    placeholder: "Search"
                },
                DatePicker: {
                    CalendarButtons: {
                        today: "Today"
                    },
                    Apply: {
                        text: "Apply"
                    },
                    Reset: {
                        text: "Reset"
                    }
                },
                AlertDialog: {
                    ButtonSupport: {
                        text: "Support"
                    },
                    ButtonCancel: {
                        text: "Cancel"
                    },
                    ButtonOK: {
                        text: "OK"
                    }
                }
            },
        },
        de: {
            translation: {
                Global: {
                    WeekDays: {
                        monday: "Mo",
                        tuesday: "Di",
                        wednesday: "Mi",
                        thursday: "Do",
                        friday: "Fr",
                        saturday: "Sa",
                        sunday: "So"
                    },
                    Months: {
                        january: "Januar",
                        february: "Februar",
                        march: "März",
                        april: "April",
                        may: "Mai",
                        june: "Juni",
                        july: "Juli",
                        august: "August",
                        september: "September",
                        october: "Oktober",
                        november: "November",
                        december: "Dezember"
                    }
                },
                Search: {
                    placeholder: "Suchen"
                },
                DatePicker: {
                    CalendarButtons: {
                        today: "Heute"
                    },
                    Apply: {
                        text: "Übernehmen"
                    },
                    Reset: {
                        text: "Rücksetzen"
                    }
                },
                AlertDialog: {
                    ButtonSupport: {
                        text: "Support"
                    },
                    ButtonCancel: {
                        text: "Abbrechen"
                    },
                    ButtonOK: {
                        text: "OK"
                    }
                }
            },
        },
    },
});

i18n.use(initReactI18next).init();

export default i18n;