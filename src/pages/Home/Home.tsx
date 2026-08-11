import CalculatorCard from "../../components/CalculatorCard/CalculatorCard";
import { calculators } from "../../calculators/calculator.registry";

const Home = () => {
    return (
        <main>
            <section>
                <h1>CalcNestHub</h1>
                <p>Your everyday calculator hub</p>
            </section>
            

            <section>
                <h2>Financial Calculators</h2>
                <div>
                    {
                        calculators
                            .filter(calculator=> calculator.category === "Financial")
                            .map(calculator=> (
                                <CalculatorCard
                                    key={calculator.id}
                                    calculator={calculator}
                                />
                            ))
                    }
                </div>
            </section>
        </main>
    );
};

export default Home;