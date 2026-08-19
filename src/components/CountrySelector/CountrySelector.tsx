import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useCountry } from "../../context/CountryContext";
import { countries } from "../../config/countries";
import SelectDropdown from "../SelectDropdown/SelectDropdown";

const CountrySelector = () => {
    const { country, setCountry } = useCountry();
    const { i18n } = useTranslation();

    const countryDisplayNames = useMemo(() => {
        return new Intl.DisplayNames(i18n.language, {
            type: "region",
        });
    }, [i18n.language]);

    const options = useMemo(
        () =>
            countries.map((item) => ({
                value: item.code,
                label:
                    countryDisplayNames.of(item.code) ??
                    item.code,
            })),
        [countryDisplayNames]
    );

    const handleCountryChange = (value: string) => {
        const selectedCountry = countries.find(
            (item) => item.code === value
        );

        if (selectedCountry) {
            setCountry(selectedCountry);
        }
    };

    return (
        <SelectDropdown
            options={options}
            value={country.code}
            onChange={handleCountryChange}
            searchable={true}
            placeholder="Select country"
        />
    );
};

export default CountrySelector;