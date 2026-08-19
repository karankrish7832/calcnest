import {
    createContext,
    useContext,
    useEffect,
    useRef,
    useState,
    type ReactNode,
} from "react";

import {
    countries,
    type CountryConfig,
} from "../config/countries";

interface CountryContextValue {
    country: CountryConfig;
    setCountry: (country: CountryConfig) => void;
}

const CountryContext =
    createContext<CountryContextValue | null>(null);

interface CountryProviderProps {
    children: ReactNode;
}

interface SavedCountry {
    code: string;
    lastActiveAt: number;
    inactiveSince: number | null;
}

const FALLBACK_COUNTRY_CODE = "IN";
const STORAGE_KEY = "calcnesthub-country";

const INACTIVITY_LIMIT = 5 * 60 * 1000; // 15 minutes
const RETENTION_LIMIT = 10 * 60 * 60 * 1000; // 10 hours

const getDeviceCountry = (): CountryConfig => {
    const locale = navigator.language;

    const countryCode =
        locale.split("-")[1]?.toUpperCase();

    if (countryCode) {
        const detectedCountry = countries.find(
            (country) =>
                country.code === countryCode
        );

        if (detectedCountry) {
            return detectedCountry;
        }
    }

    return (
        countries.find(
            (country) =>
                country.code === FALLBACK_COUNTRY_CODE
        ) ?? countries[0]
    );
};

const getSavedCountry = (): SavedCountry | null => {
    try {
        const stored =
            localStorage.getItem(STORAGE_KEY);

        if (!stored) {
            return null;
        }

        const parsed = JSON.parse(
            stored
        ) as SavedCountry;

        if (
            typeof parsed.code !== "string" ||
            typeof parsed.lastActiveAt !== "number"
        ) {
            return null;
        }

        return parsed;
    } catch {
        return null;
    }
};

const getInitialCountry = (): CountryConfig => {
    const savedCountry = getSavedCountry();

    if (savedCountry) {
        const now = Date.now();

        /*
         * The user was inactive before returning.
         * If that inactive period has exceeded
         * the 12-hour retention period, discard
         * the saved country.
         */
        if (savedCountry.inactiveSince !== null) {
            const inactiveDuration =
                now - savedCountry.inactiveSince;

            if (
                inactiveDuration <=
                RETENTION_LIMIT
            ) {
                const saved = countries.find(
                    (country) =>
                        country.code ===
                        savedCountry.code
                );

                if (saved) {
                    return saved;
                }
            }

            localStorage.removeItem(STORAGE_KEY);
        } else {
            /*
             * The user was active when the page was
             * last closed/refreshed, so keep the
             * selected country.
             */
            const saved = countries.find(
                (country) =>
                    country.code ===
                    savedCountry.code
            );

            if (saved) {
                return saved;
            }
        }
    }

    return getDeviceCountry();
};

export const CountryProvider = ({
    children,
}: CountryProviderProps) => {
    const [country, setCountryState] =
        useState<CountryConfig>(
            getInitialCountry
        );

    const activityTimer =
        useRef<ReturnType<typeof setTimeout> | null>(
            null
        );

    const markActivity = () => {
        const savedCountry = getSavedCountry();

        if (!savedCountry) {
            return;
        }

        if (activityTimer.current) {
            clearTimeout(activityTimer.current);
        }

        activityTimer.current = setTimeout(() => {
            const current = getSavedCountry();

            if (!current) {
                return;
            }

            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify({
                    ...current,
                    inactiveSince: Date.now(),
                })
            );
        }, INACTIVITY_LIMIT);
    };

    const setCountry = (
        selectedCountry: CountryConfig
    ) => {
        setCountryState(selectedCountry);

        const now = Date.now();

        const savedCountry: SavedCountry = {
            code: selectedCountry.code,
            lastActiveAt: now,
            inactiveSince: null,
        };

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(savedCountry)
        );

        if (activityTimer.current) {
            clearTimeout(
                activityTimer.current
            );
        }

        activityTimer.current = setTimeout(
            () => {
                const current =
                    getSavedCountry();

                if (!current) {
                    return;
                }

                localStorage.setItem(
                    STORAGE_KEY,
                    JSON.stringify({
                        ...current,
                        inactiveSince:
                            Date.now(),
                    })
                );
            },
            INACTIVITY_LIMIT
        );
    };

    useEffect(() => {
        const handleActivity = () => {
            markActivity();
        };

        const events = [
            "click",
            "keydown",
            "input",
            "scroll",
            "pointerdown",
        ];

        events.forEach((event) => {
            window.addEventListener(
                event,
                handleActivity,
                { passive: true }
            );
        });

        markActivity();

        return () => {
            events.forEach((event) => {
                window.removeEventListener(
                    event,
                    handleActivity
                );
            });

            if (activityTimer.current) {
                clearTimeout(
                    activityTimer.current
                );
            }
        };
    }, []);

    return (
        <CountryContext.Provider
            value={{
                country,
                setCountry,
            }}
        >
            {children}
        </CountryContext.Provider>
    );
};

export const useCountry =
    (): CountryContextValue => {
        const context =
            useContext(CountryContext);

        if (!context) {
            throw new Error(
                "useCountry must be used within CountryProvider"
            );
        }

        return context;
    };