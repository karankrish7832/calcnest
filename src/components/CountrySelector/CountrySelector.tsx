import { useMemo } from "react";
import { useCountry } from "../../context/CountryContext";
import { countries } from "../../config/countries";
import SelectDropdown from "../SelectDropdown/SelectDropdown";

const CountrySelector = () => {
    const { country, setCountry } = useCountry();

    const options = useMemo(
        () =>
            countries.map((item) => ({
                value: item.code,
                label: item.name,
            })),
        []
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