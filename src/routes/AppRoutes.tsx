import { BrowserRouter, Routes, Route } from "react-router-dom";
import CalculatorLayout from "../components/Layout/CalculatorLayout";
import Home from "../pages/Home/Home";
import CalculatorPage from "../pages/CalculatorPage";
import Privacy from "../pages/Privacy/Privacy";
import Terms from "../pages/Terms/Terms";

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
                    <Route
                        path="/privacy"
                        element={<Privacy />}
                    />

                    <Route
                        path="/terms"
                        element={<Terms />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;