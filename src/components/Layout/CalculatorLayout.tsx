import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import styles from "./CalculatorLayout.module.css";

const CalculatorLayout = () => {
    const [search, setSearch] = useState("");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const clearSearch = () => {
        setSearch("");
    };

    const toggleSidebar = () => {
        setIsSidebarOpen((current) => !current);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const handleCalculatorClick = () => {
        clearSearch();
        closeSidebar();
    };

    return (
        <div className={styles.layout}>
            <Header
                onLogoClick={clearSearch}
                onMenuClick={toggleSidebar}
                isSidebarOpen={isSidebarOpen}
            />

            <div className={styles.body}>
                <Sidebar
                    search={search}
                    onSearchChange={setSearch}
                    onCalculatorClick={handleCalculatorClick}
                    isOpen={isSidebarOpen}
                />

                {isSidebarOpen && (
                    <button
                        type="button"
                        className={styles.overlay}
                        aria-label="Close calculator menu"
                        onClick={closeSidebar}
                    />
                )}

                <main className={styles.main}>
                    <div className={styles.content}>
                        <Outlet />
                    </div>

                    <Footer />
                </main>
            </div>
        </div>
    );
};

export default CalculatorLayout;