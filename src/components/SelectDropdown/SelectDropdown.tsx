import {
    useEffect,
    useRef,
    useState,
} from "react";
import styles from "./SelectDropdown.module.css";

export interface SelectOption {
    value: string;
    label: string;
}

interface SelectDropdownProps {
    options: SelectOption[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    searchable?: boolean;
}

const SelectDropdown = ({
    options,
    value,
    onChange,
    placeholder = "Select...",
    searchable = false,
}: SelectDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [menuPosition, setMenuPosition] =
        useState<"left" | "right">("left");

    const dropdownRef =
        useRef<HTMLDivElement>(null);

    const selectedOption = options.find(
        (option) => option.value === value
    );

    const filteredOptions = options.filter((option) =>
        option.label
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    const handleToggle = () => {
        if (!isOpen && dropdownRef.current) {
            const rect =
                dropdownRef.current.getBoundingClientRect();

            const menuWidth = 200;
            const margin = 8;

            const spaceOnRight =
                window.innerWidth - rect.left;

            const spaceOnLeft =
                rect.right;

            if (
                spaceOnRight >=
                menuWidth + margin
            ) {
                setMenuPosition("left");
            } else if (
                spaceOnLeft >=
                menuWidth + margin
            ) {
                setMenuPosition("right");
            }

            setIsOpen(true);
            return;
        }

        setIsOpen(false);
        setSearch("");
    };

    const handleSelect = (
        option: SelectOption
    ) => {
        onChange(option.value);
        setIsOpen(false);
        setSearch("");
    };

    useEffect(() => {
        const handleOutsideClick = (
            event: MouseEvent
        ) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(
                    event.target as Node
                )
            ) {
                setIsOpen(false);
                setSearch("");
            }
        };

        document.addEventListener(
            "mousedown",
            handleOutsideClick
        );

        return () => {
            document.removeEventListener(
                "mousedown",
                handleOutsideClick
            );
        };
    }, []);

    useEffect(() => {
        const handleEscape = (
            event: KeyboardEvent
        ) => {
            if (
                event.key === "Escape" &&
                isOpen
            ) {
                setIsOpen(false);
                setSearch("");
            }
        };

        document.addEventListener(
            "keydown",
            handleEscape
        );

        return () => {
            document.removeEventListener(
                "keydown",
                handleEscape
            );
        };
    }, [isOpen]);

    return (
        <div
            ref={dropdownRef}
            className={styles.dropdown}
        >
            <button
                type="button"
                className={styles.trigger}
                onClick={handleToggle}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
            >
                <span>
                    {selectedOption?.label ??
                        placeholder}
                </span>

                <span className={styles.arrow}>
                    {isOpen ? "▲" : "▼"}
                </span>
            </button>

            {isOpen && (
                <div
                    className={`${styles.menu} ${
                        menuPosition === "right"
                            ? styles.menuRight
                            : styles.menuLeft
                    }`}
                >
                    {searchable && (
                        <div
                            className={
                                styles.searchWrapper
                            }
                        >
                            <input
                                type="search"
                                className={
                                    styles.search
                                }
                                placeholder="Search..."
                                value={search}
                                onChange={(event) =>
                                    setSearch(
                                        event.target
                                            .value
                                    )
                                }
                                autoFocus
                            />
                        </div>
                    )}

                    <div
                        className={styles.options}
                        role="listbox"
                    >
                        {filteredOptions.length >
                        0 ? (
                            filteredOptions.map(
                                (option) => (
                                    <button
                                        key={
                                            option.value
                                        }
                                        type="button"
                                        className={`${styles.option} ${
                                            option.value ===
                                            value
                                                ? styles.selected
                                                : ""
                                        }`}
                                        onClick={() =>
                                            handleSelect(
                                                option
                                            )
                                        }
                                    >
                                        {
                                            option.label
                                        }
                                    </button>
                                )
                            )
                        ) : (
                            <p
                                className={
                                    styles.noResults
                                }
                            >
                                No results found
                            </p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SelectDropdown;