import {
    useEffect,
    useRef,
    useState,
    type ReactNode,
} from "react";

import styles from "./Accordion.module.css";

interface AccordionProps {
    title: string;
    children: ReactNode;

    defaultOpen?: boolean;
    hoverOpen?: boolean;

    exclusive?: boolean;
    isOpen?: boolean;
    onToggle?: () => void;
}

const Accordion = ({
    title,
    children,
    defaultOpen = false,
    hoverOpen = false,
    exclusive = false,
    isOpen: controlledIsOpen,
    onToggle,
}: AccordionProps) => {

    const contentRef = useRef<HTMLDivElement>(null);
    const [internalIsOpen, setInternalIsOpen] = useState(defaultOpen);
    const [contentHeight, setContentHeight] = useState(0);

    const isOpen = exclusive ? controlledIsOpen ?? false : internalIsOpen;

    const toggle = () => {
        if (exclusive) {
            onToggle?.();
            return;
        }
        setInternalIsOpen((open) => !open);
    };

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight);
        }
    }, [children]);

    return (
        <div
            className={styles.accordion}
            onMouseEnter={() => {
                if (hoverOpen && !isOpen) {
                    toggle();
                }
            }}
            onMouseLeave={() => {
                if (hoverOpen && isOpen) {
                    toggle();
                }
            }}
        >
            <button
                type="button"
                className={styles.summary}
                onClick={toggle}
            >
                <span>{title}</span>

                <span className={styles.arrow}>
                    {isOpen ? "▲" : "▼"}
                </span>
            </button>

            <div
                ref={contentRef}
                className={`${styles.content} ${
                    isOpen ? styles.open : ""
                }`}
                style={{
                    maxHeight: isOpen
                        ? `${contentHeight}px`
                        : "0px",
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default Accordion;