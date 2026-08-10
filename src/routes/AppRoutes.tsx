import { BrowserRouter, Routes, Route } from "react-router-dom";
import CalculatorLayout from "../components/Layout/CalculatorLayout";
import Home from "../pages/Home/Home";
import CalculatorPage from "../pages/CalculatorPage";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<CalculatorLayout />}>
                    <Route
                        path="/"
                        element={<Home />}
                    />

                    <Route
                        path="/calculators/:calculatorId"
                        element={<CalculatorPage />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;