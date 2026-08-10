import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import styles from "./CalculatorLayout.module.css";

const CalculatorLayout = () => {
    const [search, setSearch] = useState("");

    const clearSearch = () => {
        setSearch("");
    };

    return (
        <div className={styles.layout}>
            <Header onLogoClick={clearSearch} />

            <div className={styles.body}>
                <Sidebar
                    search={search}
                    onSearchChange={setSearch}
                    onCalculatorClick={clearSearch}
                />

                <main className={styles.main}>
                    <Outlet />
                    <Footer />
                </main>
            </div>
        </div>
    );
};

export default CalculatorLayout;