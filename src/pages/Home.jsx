import React, { useEffect, useState } from "react";

import usePizzaService from "../components/services";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaSkeleton from "../components/pizzaBlock/PizzaSkeleton";
import PizzaBlock from "../components/pizzaBlock";

const Home = () => {
    const [pizzasList, setPizzasList] = useState([]);
    const { loading, getAllPizzas } = usePizzaService();

    useEffect(() => {
        onRequest();
    }, []);

    const onRequest = () => {
        getAllPizzas().then(onPizzasLoaded);
    };

    const onPizzasLoaded = (newPizzasList) => {
        setPizzasList(newPizzasList);
    };
    return (
        <>
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {loading
                    ? [...new Array(6)].map((_, i) => <PizzaSkeleton key={i} />)
                    : pizzasList.map((item) => (
                          <PizzaBlock data={item} key={item.id} />
                      ))}
            </div>
        </>
    );
};
export default Home;
