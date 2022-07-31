import React, { useEffect, useState } from "react";
import { SearchContext } from "../App";

import usePizzaService from "../components/services";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaSkeleton from "../components/pizzaBlock/PizzaSkeleton";
import PizzaBlock from "../components/pizzaBlock";
import Pagination from "../components/Pagination";

const Home = () => {
  const { searchValue } = React.useContext(SearchContext);
  const [pizzasList, setPizzasList] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, getPizzas } = usePizzaService();

  const sortList = ["rating", "price", "title"];

  useEffect(() => {
    // onRequest(categoryId, sortList[sortType], currentPage);
    getPizzas(categoryId, sortList[sortType], currentPage).then(onPizzasLoaded);
    window.scrollTo(0, 0);
  }, [categoryId, sortType, currentPage]);

  // const onRequest = (categoryId, sortName, currentPage) => {
  // getPizzas(categoryId, sortName currentPage).then(onPizzasLoaded);
  // };

  const onPizzasLoaded = (newPizzasList) => {
    setPizzasList(newPizzasList);
  };

  const pizzas = pizzasList
    .filter((obj) =>
      obj.title.toLowerCase().includes(searchValue.toLowerCase())
    )
    .map((item) => <PizzaBlock data={item} key={item.id} />);

  const pizzasSkeletons = [...new Array(6)].map((_, i) => (
    <PizzaSkeleton key={i} />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onChangeCategory={(id) => setCategoryId(id)}
        />
        <Sort value={sortType} onChangeSort={setSortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{loading ? pizzasSkeletons : pizzas}</div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
};
export default Home;
